// import React, { useState } from "react";
// import axios from "axios";
// import { ToastContainer, toast } from "react-toastify";

// const InputPodcast = () => {
//   const [frontImage, setFrontImage] = useState(null);
//   const [audioFile, setaudioFile] = useState(null);
//   const [DragImg, setDargImg] = useState(false);
//   const [inputValues, setInputValues] = useState({
//     title: "",
//     description: "",
//     category: "",
//   });

//   const handleChangeImage = (e) => {
//     e.preventDefault();
//     const file = e.target.files[0];
//     setFrontImage(file);
//   };
//   const handleDragEnter = (e) => {
//     e.preventDefault();
//     setDargImg(true);
//   };
//   const handleDragLeave = (e) => {
//     e.preventDefault();
//     setDargImg(false);
//   };
//   const handleDragOver = (e) => {
//     e.preventDefault();
//   };

//   const handleDropImage = (e) => {
//     e.preventDefault();
//     setDargImg(false);
//     const file = e.dataTransfer.files[0];
//     setFrontImage(file);
//   };
//   const handleAudioFile = (e) => {
//     e.preventDefault();
//     const file = e.target.files[0];
//     setaudioFile(file);
//   };
//   const onChangeInputs = (e) => {
//     const { name, value } = e.target;
//     setInputValues({ ...inputValues, [name]: value });
//   };
//   const handleSubmitPodcast = async () => {
//     const data = new FormData();
//     data.append("title", inputValues.title);
//     data.append("description", inputValues.description);
//     data.append("category", inputValues.category);
//     data.append("frontImage", frontImage);
//     data.append("audioFile", audioFile);

//     try {
//       console.log(data)
//       const res = await axios.post(
//         "http://localhost:3000/api/v1/addPodcast",
//         data,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//           },
//           withCredentials: true,
//         }
//       );
//       toast.success(res.data.message);
//     } catch (error) {
//       toast.error(error.response.data.message);
//     } finally {
//       setInputValues({
//         title: "",
//         description: "",
//         category: "",
//       });
//       setFrontImage(null)
//       setaudioFile(null)
//     }
//   };

//   return (
//     <div className="my-4 px-4 lg:px-12">
//       <ToastContainer position="top-center" />
//       <h1 className="text-2xl font-semibold">Create your podcast</h1>
//       <div className="mt-5 flex flex-col lg:flex-row iece' justify-between lg:justify-start gap-4">
//         <div className="w-full lg:w-2/6 items-center justify-center lg:justify-start">
//           <div
//             className="size-[20vh] lg:size-[50vh] flex items-center justify-center bg-slate-100 transition-all duration-300"
//             style={{ border: "1px dashed black" }}
//             onDragEnter={handleDragEnter}
//             onDragLeave={handleDragLeave}
//             onDragOver={handleDragOver}
//             onDrop={handleDropImage}
//           >
//             <input
//               type="file"
//               name="frontImage"
//               id="file"
//               accept="image/*"
//               className="hidden"
//               onChange={handleChangeImage}
//             />
//             {frontImage ? (
//               <img
//                 src={URL.createObjectURL(frontImage)}
//                 alt="thumbnail"
//                 className="w-[100%] h-[100%] object-cover"
//               />
//             ) : (
//               <>
//                 <label
//                   htmlFor="file"
//                   className={`text-xl h-[100%] w-[100%] flex cursor-pointer items-center justify-center ${
//                     DragImg ? "bg-blue-200" : ""
//                   } hover:bg-zinc-200 transition-all duration-300`}
//                 >
//                   <div className="text-center p-4">
//                     Add and drop the thumbnail or click to browse
//                   </div>
//                 </label>
//               </>
//             )}
//           </div>
//         </div>
//         <div className="w-full lg:w-4/6">
//           <div className="flex flex-col">
//             <label htmlFor="title">Title</label>
//             <input
//               type="text"
//               id="title"
//               name="title"
//               value={inputValues.title}
//               onChange={onChangeInputs}
//               placeholder="Title for your podcast"
//               className="mt-4 px-4 py-2 outline-none border border-zinc-800 rounded"
//             />
//           </div>
//           <div className="flex mt-4 flex-col">
//             <label htmlFor="title">Description</label>
//             <textarea
//               type="text"
//               id="description"
//               name="description"
//               value={inputValues.description}
//               onChange={onChangeInputs}
//               placeholder="Description for your podcast"
//               className="mt-4 px-4 py-2 outline-none border border-zinc-800 rounded"
//               rows={4}
//             />
//           </div>
//           <div className="flex mt-4">
//             <div className="flex flex-col w-2/6">
//               <label htmlFor="audioFile">Select audio</label>
//               <input
//                 className="mt-4 border cursor-pointer py-2 px-2"
//                 type="file"
//                 accept=".mp3, .wav, .m4a, .ogg"
//                 id="audioFile"
//                 name="audioFile"
//                 onChange={handleAudioFile}
//               />
//             </div>
//             <div className="flex flex-col w-2/6 ml-6">
//               <label htmlFor="category">Select category</label>
//               <select
//                 name="category"
//                 value={inputValues.category}
//                 onChange={onChangeInputs}
//                 id="category"
//                 className="border border-zinc-900 rounded mt-4 outline-none px-4 py-2"
//               >
//                 <option value="">Select Category</option>
//                 <option value="Comedy">Comedy</option>
//                 <option value="Business">Business</option>
//                 <option value="Education">Education</option>
//                 <option value="Hobbies">Hobbies</option>
//                 <option value="Government">Government</option>
//               </select>
//             </div>
//           </div>
//           <div className="mt-4 lg:mt-6 flex">
//             <button
//               onClick={handleSubmitPodcast}
//               className="bg-zinc-900 cursor-pointer w-full text-white font-semibold rounded px-8 py-2 hover:bg-zinc-700 transition-all duration-300"
//             >
//               Create Podcast
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default InputPodcast





import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const InputPodcast = () => {
  const [frontImage, setFrontImage] = useState(null);
  const [audioFile, setAudioFile] = useState(null);
  const [dragImg, setDragImg] = useState(false);
  const [inputValues, setInputValues] = useState({
    title: "",
    description: "",
    category: "",
  });

  const handleChangeImage = (e) => {
    const file = e.target.files[0];
    setFrontImage(file);
  };

  const handleDragEnter = (e) => {
    e.preventDefault();
    setDragImg(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setDragImg(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDropImage = (e) => {
    e.preventDefault();
    setDragImg(false);
    const file = e.dataTransfer.files[0];
    setFrontImage(file);
  };

  const handleAudioFile = (e) => {
    const file = e.target.files[0];
    setAudioFile(file);
  };

  const onChangeInputs = (e) => {
    const { name, value } = e.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  const handleSubmitPodcast = async () => {
    if (
      !frontImage ||
      !audioFile ||
      !inputValues.title ||
      !inputValues.description ||
      !inputValues.category
    ) {
      toast.error("All fields are required");
      return;
    }

    const data = new FormData();
    data.append("title", inputValues.title);
    data.append("description", inputValues.description);
    data.append("category", inputValues.category);
    data.append("frontImage", frontImage);
    data.append("audioFile", audioFile);

    try {
      const res = await axios.post("https://pod-caster-api-04.vercel.app/api/v1/podcast/addPodcast", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      });
      toast.success(res.data.message);
    } catch (error) {
      toast.error(error?.response?.data?.message || "Something went wrong");
    } finally {
      // Reset all fields
      setInputValues({
        title: "",
        description: "",
        category: "",
      });
      setFrontImage(null);
      setAudioFile(null);

      // Clear actual file inputs
      const frontImageInput = document.getElementById("file");
      const audioInput = document.getElementById("audioFile");
      if (frontImageInput) frontImageInput.value = "";
      if (audioInput) audioInput.value = "";
    }
  };

  return (
    <div className="my-4 px-4 lg:px-12">
      <ToastContainer position="top-center" />
      <h1 className="text-2xl font-semibold">Create your podcast</h1>
      <div className="mt-5 flex flex-col lg:flex-row justify-between lg:justify-start gap-4">
        {/* Thumbnail Upload */}
        <div className="w-full lg:w-2/6">
          <div
            className="size-[20vh] lg:size-[50vh] flex items-center justify-center bg-slate-100 transition-all duration-300"
            style={{ border: "1px dashed black" }}
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave}
            onDragOver={handleDragOver}
            onDrop={handleDropImage}
          >
            <input
              type="file"
              name="frontImage"
              id="file"
              accept="image/*"
              className="hidden"
              onChange={handleChangeImage}
            />
            {frontImage ? (
              <img
                src={URL.createObjectURL(frontImage)}
                alt="thumbnail"
                className="w-full h-full object-cover"
              />
            ) : (
              <label
                htmlFor="file"
                className={`text-xl w-full h-full flex cursor-pointer items-center justify-center ${
                  dragImg ? "bg-blue-200" : ""
                } hover:bg-zinc-200 transition-all duration-300`}
              >
                <div className="text-center p-4">
                  Drag & drop thumbnail or click to browse
                </div>
              </label>
            )}
          </div>
        </div>

        {/* Form Fields */}
        <div className="w-full lg:w-4/6">
          <div className="flex flex-col">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              value={inputValues.title}
              onChange={onChangeInputs}
              placeholder="Title for your podcast"
              className="mt-2 px-4 py-2 outline-none border border-zinc-800 rounded"
            />
          </div>

          <div className="flex mt-4 flex-col">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              value={inputValues.description}
              onChange={onChangeInputs}
              placeholder="Description for your podcast"
              className="mt-2 px-4 py-2 outline-none border border-zinc-800 rounded"
              rows={4}
            />
          </div>

          <div className="flex mt-4">
            <div className="flex flex-col w-2/6">
              <label htmlFor="audioFile">Select audio</label>
              <input
                className="mt-2 border cursor-pointer py-2 px-2"
                type="file"
                accept=".mp3, .wav, .m4a, .ogg"
                id="audioFile"
                name="audioFile"
                onChange={handleAudioFile}
              />
            </div>

            <div className="flex flex-col w-2/6 ml-6">
              <label htmlFor="category">Select category</label>
              <select
                name="category"
                value={inputValues.category}
                onChange={onChangeInputs}
                id="category"
                className="border border-zinc-900 rounded mt-2 outline-none px-4 py-2"
              >
                <option value="">Select Category</option>
                <option value="Comedy">Comedy</option>
                <option value="Business">Business</option>
                <option value="Education">Education</option>
                <option value="Hobbies">Hobbies</option>
                <option value="Government">Government</option>
              </select>
            </div>
          </div>

          <div className="mt-6 flex">
            <button
              onClick={handleSubmitPodcast}
              className="bg-zinc-900 w-full text-white font-semibold rounded px-8 py-2 hover:bg-zinc-700 transition-all duration-300"
            >
              Create Podcast
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputPodcast;
