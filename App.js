import React, { useState } from 'react';

const ImageGenerator = () => {
  const [text, setText] = useState('');
  const [imageSizes, setImageSizes] = useState('512');
  const [numImages, setNumImages] = useState(1);
  const [apiKey, setApiKey] = useState('');
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState([]);

  const sizeOptions = ['256', '512', '1024', '1280', '2560', '3840', '5120', '7680'];

  const generateImage = () => {
    if (apiKey === '') {
      setApiKey(prompt('Please enter your OpenAI API key') || '');
    }
    if (text === '') {
      alert('Please enter a value');
      return;
    }

    setLoading(true);

    const data = {
      prompt: text,
      n: numImages,
      size: `${imageSizes}x${imageSizes}`,
    };

    fetch('https://api.openai.com/v1/images/generations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setImages(data.data);
      })
      .catch((err) => {
        setLoading(false);
        alert('Something went wrong. Please try again.');
        console.error(err);
      });
  };

  const downloadImage = (url) => {
    const link = document.createElement('a');
    link.href = url;
    link.download = `${text.split(' ').join('_')}.png`;
    link.target = '_blank';
    link.click();
  };

  return (
    <div className=""
    style={{
      backgroundImage: 'url(https://img.freepik.com/free-vector/geometric-science-education-background-vector-gradient-blue-digital-remix_53876-125993.jpg?w=2000)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}>

      <div className="flex flex-col justify-center px-4 pt-12 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-10 text-white">Image Generator</h1>
          <p className="text-md lg:text-xl mb-10 text-white">
            This is a simple image generator using{' '}
            <a href="https://openai.com/api/" className="font-semibold">
              OpenAI API.
            </a>{' '}
            You can generate images by entering a short description of the image or by entering a keyword.
          </p>
        </div>
        <div className="shadow-md m-80  rounded-lg  mb-4 flex flex-col my-2">
          <div className="mb-4 flex flex-col gap-2">
            <label htmlFor="api" className="text-gray-600 text-white">
              OpenAI API Key
            </label>
            <input
              type="text"
              id="api"
              className="input-style w-100 pl-5 h-10 rounded-full"
              placeholder="Enter your OpenAI API key here"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
            />
            <label htmlFor="text" className=" text-white">
              Description or Keyword
            </label>
            <textarea
              id="text"
              className="input-style pt-1.5 pl-5 align-item-center w-100 rounded-full"
              placeholder="Enter a short description of the image or a keyword"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <label htmlFor="sizeSelect" className="text-white">
              Image Size
            </label>
            <select
              id="sizeSelect"
              className="input-style w-100 h-8 pl-5 rounded-full"
              value={imageSizes}
              onChange={(e) => setImageSizes(e.target.value)}
            >
              {sizeOptions.map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
            <label htmlFor="numImagesSelect" className="text-white">
              Number of Images
            </label>
            <select
              id="numImagesSelect"
              className="input-style w-100 h-8 pl-5 rounded-full"
              value={numImages}
              onChange={(e) => setNumImages(parseInt(e.target.value))}
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </select>
          </div>
          <div className="bg-blue-500 w-20 h-10 hover:bg-blue-700 text-white font-bold p-1.5 rounded">
            <button
              id="btn"
              className={`text-white button-style ${text === '' ? '' : 'bg-slate-900 text-slate-50'} bg-color-black`}
              onClick={generateImage}
              disabled={text === ''}
            >
              Generate
            </button>
          </div>
          {loading && (
            <div className="flex justify-center items-center mt-10 ">
              <svg className="animate-spin h-10 w-10 text-gray-500" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647zm11-2.647A7.962 7.962 0 0120 12h-4c0 3.042-1.135 5.824-3 7.938l-3-2.647z"
                ></path>
              </svg>
            </div>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mt-10">
            {images.map((item, index) => (
              <div
                key={index}
                className="w-full h-auto rounded-lg shadow-lg hover:shadow-2xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-103"
              >
                <img src={item.url} alt="image" className="w-full h-full rounded-lg" />
                <div
                  className="absolute bottom-0 left-0 w-full h-10 px-2 bg-black bg-opacity-70 flex items-center justify-between"
                  style={{ borderBottomLeftRadius: '0.5rem', borderBottomRightRadius: '0.5rem' }}
                >
                  <button
                    className="text-white hover:text-gray-300"
                    onClick={() => downloadImage(item.url)}
                    title="Download"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 inline-block align-middle mr-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M9.293 2.293a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L11 6.414V15a1 1 0 11-2 0V6.414L4.707 8.707a1 1 0 01-1.414-1.414l5-5zM3 16a2 2 0 012-2h10a2 2 0 012 2v2a2 2 0 01-2 2H5a2 2 0 01-2-2v-2z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Download
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageGenerator;
