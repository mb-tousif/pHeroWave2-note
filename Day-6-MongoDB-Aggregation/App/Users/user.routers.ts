import express from 'express';
import { deleteUserByEmail, getAgeOver30Users, getAllUsers, getNYUsers, getShawShankUsers, getSortedUsers, getUserMovies, groupUsersByMovie, postBulkData, postUserData, updateUserByEmail } from './user.controller';

const router = express.Router();

router.post("/user/bulkData", postBulkData);
router.post("/user/userData", postUserData);

router.get("/user/allUsers", getAllUsers);

// Practice Task API
router.get("/users/new-york", getNYUsers) // Task 1
router.get("/users/email/movie", getUserMovies) // Task 2
router.get("/users/food/age/sorted", getSortedUsers) // Task 3
router.get("/users/age-over-30", getAgeOver30Users) // Task 4
router.get("/count",getShawShankUsers) // Task 5
router.put("/user/update/zipCode", updateUserByEmail) // Task 6
router.delete("/user/del-by-email", deleteUserByEmail) // Task 7
router.get("/user/group-by-favorite-movie/avg-age", groupUsersByMovie) // Task 8

export default router;