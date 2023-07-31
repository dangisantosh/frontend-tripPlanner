// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import {
//   TextField,
//   Button,
//   Container,
//   Typography,
//   Box,
//   Paper,
// } from "@material-ui/core";
// import axios from "axios";
// import toast from "react-hot-toast";

// const ForgotPassword = () => {
//   const [email, setEmail] = useState("");
//   const [newPassword, setNewPassword] = useState("");
//   const [answer, setAnswer] = useState("");

//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/forgot-password`, {
//         email,
//         newPassword,
//         answer,
//       });
//       if (res && res.data.success) {
//         toast.success(res.data && res.data.message);
//         navigate("/login");
//       } else {
//         toast.error(res.data.message);
//       }
//     } catch (error) {
//       console.log(error);
//       toast.error("Something went wrong");
//     }
//   };

//   return (
//     <Container component="main" maxWidth="xs">
//       <Paper elevation={3} >
//         <Typography variant="h4" >
//           RESET PASSWORD
//         </Typography>

//         <form onSubmit={handleSubmit}>
//           <Box >
//             <TextField
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               label="Enter Your Email"
//               variant="outlined"
//               fullWidth
//               required
//             />
//           </Box>

//           <Box >
//             <TextField
//               value={answer}
//               onChange={(e) => setAnswer(e.target.value)}
//               label="Enter Your favorite Sport Name"
//               variant="outlined"
//               fullWidth
//               required
//             />
//           </Box>

//           <Box >
//             <TextField
//               value={newPassword}
//               onChange={(e) => setNewPassword(e.target.value)}
//               label="Enter Your Password"
//               variant="outlined"
//               fullWidth
//               required
//             />
//           </Box>

//           <Button
//             type="submit"
//             variant="contained"
//             color="primary"
            
//           >
//             RESET
//           </Button>
//         </form>

//         <Link to="/login" >
//           Remember your password? Login here.
//         </Link>
//       </Paper>
//     </Container>
//   );
// };

// export default ForgotPassword;
