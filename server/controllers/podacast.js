import categoryModel from "../models/categoryModel.js";
import podCastModel from "../models/podcastsModel.js";
import userModel from "../models/userModel.js";

const addPodcast = async (req, res) => {
  try {
    const { title, description, category } = req.body;
    // const frontImage = req.files["frontImage"][0].path;
    // const audioFile = req.files["audioFile"][0].path;
    const frontImage = req.files?.frontImage?.[0]?.path;
const audioFile = req.files?.audioFile?.[0]?.path

    if (!title || !description || !category || !frontImage || !audioFile) {
  return res.status(400).json({ message: "All fields are required" });
}

    const { user } = req;
    const cat = await categoryModel.findOne({ categoryName: category });
    if (!cat) {
      return res.status(400).json({ message: "No category found" });
    }
    const catId = cat._id;
    const userId = user._id;
    const newPodcast = new podCastModel({
      title,
      description,
      category: catId,
      frontImage,
      audioFile,
      user: userId,
    });
    await newPodcast.save();
    await categoryModel.findByIdAndUpdate(catId, {
      $push: { podcasts: newPodcast._id },
    });
    await userModel.findByIdAndUpdate(userId, {
      $push: { podcasts: newPodcast._id },
    });
    return res.status(200).json({ message: "podcast added successfully" });
  } catch (error) {
    console.log("erincoi oirn ",error);
    return res
      .status(500)
      .json({ message: "something is going wrong while creating podcast" });
  }
};

const getAllPodcast = async (req, res) => {
  try {
    const podacasts = await podCastModel
      .find()
      .populate("category")
      .sort({ createdAt: -1 });

    return res.status(200).json({ data: podacasts });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

const getUserPodcast = async (req, res) => {
  try {
    const { user } = req;
    const userId = user._id;
    const data = await userModel
      .findById(userId)
      .populate({ path: "podcasts", populate: { path: "category" } })
      .select("-password");

    if (data && data.podcasts) {
      data.podcasts.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
    }
    return res.status(200).json({ data: data.podcasts });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

const getPodcastById = async (req, res) => {
  try {
    const { id } = req.params;
    const podcasts = await podCastModel.findById(id).populate("category");

    return res.status(200).json({ data: podcasts });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

const getPodcastByCategory = async (req, res) => {
  try {
    const { cat } = req.params;
    const categories = await categoryModel
      .find({ categoryName: cat })
      .populate({ path: "podcasts", populate: { path: "category" } });

    let podcasts = [];
    categories.forEach((category) => {
      podcasts = [...podcasts, ...category.podcasts];
    });
    return res.status(200).json({ data: podcasts });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

export default {
  addPodcast,
  getAllPodcast,
  getUserPodcast,
  getPodcastById,
  getPodcastByCategory,
};
