import { asyncHandler } from "../utils/asyncHandler.js";

const registerUser = asyncHandler(async (req, res)=> {
    console.log("___________")
    res.status(200).json({
        message: "Aamir Malik"
    })
})



export {registerUser}