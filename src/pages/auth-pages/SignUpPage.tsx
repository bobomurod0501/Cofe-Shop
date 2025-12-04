import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import React from "react";
import Button from "@mui/material/Button";
import { Navigate, useNavigate } from "react-router";
import { useForm } from "react-hook-form"
import { Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { authScheme } from "../../validations/scheme";

// images
import logoImage from "../../../public/wp11391338.jpg"

// context
import { useAuthContext } from "../../context/authContext";

// firebase

import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../firebase/config";
import { toast } from "react-toastify";

interface SignUpFormTypes {
  fName: string,
  lName: string,
  email: string,
  password: string
}
const SignUpPage = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const navigate = useNavigate();
  const {setIsAuth, isAuth} = useAuthContext()
  if (isAuth) return <Navigate to="/" replace />;
  const { handleSubmit, control, reset } = useForm<SignUpFormTypes>({
    resolver: zodResolver(authScheme),
    defaultValues: {
      fName: "",
      lName: "",
      email: "",
      password: ""
    }
  })
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };



  const onSubmitFunc = async (data: SignUpFormTypes) => {
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then(async(userCredential) => {
        // Signed up
        const user = userCredential.user;
        const token = await user.getIdToken()
        localStorage.setItem("access_token", token)
        // ...
         await updateProfile(user, {
          displayName: data.fName,
        });
        setIsAuth(true)
        reset({
          fName: "",
          lName: "",
          email: "",
          password: ""
        })
        toast.success("successfully registered")
        navigate("/")

      })
      .catch(() => {
        toast.error("Email or Password is incorrect")
        reset({
          fName: "",
          lName: "",
          email: "",
          password: ""
        })
      });
  }
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100%",
        backgroundImage: `url(${logoImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <form onSubmit={handleSubmit(onSubmitFunc)}>
        <Box
          sx={{
            width: 350,
            padding: 4,
            borderRadius: 3,
            backgroundColor: "rgba(255, 255, 255, 0.2)",
            backdropFilter: "blur(6px)",
            boxShadow: "0 4px 30px rgba(0,0,0,0.1)",
          }}
        >
          <Typography variant="h5" className="text-center" mb={3}>
            Sign up
          </Typography>
          <Controller
            control={control}
            name="fName"
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                error={!!error}
                helperText={error?.message}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "&.Mui-focused fieldset": {
                      borderColor: "#552B10",
                    },
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "#552B10",
                  },
                }}
                size="small"
                fullWidth
                variant="outlined"
                label="First name"
              ></TextField>
            )}

          />
          <Controller
            name="lName"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                error={!!error}
                helperText={error?.message}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "&.Mui-focused fieldset": {
                      borderColor: "#552B10",
                    },
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "#552B10",
                  },
                  mt: 3,
                  mb: 3,
                }}
                size="small"
                fullWidth
                variant="outlined"
                label="Last name"
              ></TextField>
            )}
          />

          <Controller
            name="email"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                error={!!error}
                helperText={error?.message}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "&.Mui-focused fieldset": {
                      borderColor: "#552B10",
                    },
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "#552B10",
                  },
                }}
                size="small"
                fullWidth
                variant="outlined"
                label="Email"
                type="email"
              ></TextField>
            )}
          />


          <Controller
            name="password"
            control={control}
            render={({ field, fieldState }) => (
              <FormControl
                fullWidth
                variant="outlined"
                size="small"
                sx={{
                  mt: 2,
                  mb: 2,
                  "& .MuiOutlinedInput-root": {
                    "&.Mui-focused fieldset": {
                      borderColor: "#552B10",
                    },
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "#552B10",
                  },
                }}
              >
                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                <OutlinedInput
                  {...field}
                  id="outlined-adornment-password"
                  type={showPassword ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label={showPassword ? "Hide password" : "Show password"}
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  error={!!fieldState.error}
                  label="Password"
                />
              </FormControl>
            )}
          />
          <Button type="submit" fullWidth sx={{ background: "#552B10" }} variant="contained">
            Sign up
          </Button>
          <Button
            onClick={() => navigate("/auth/login")}
            fullWidth
            sx={{ borderColor: "#552B10", color: "#552B10", mt: 2 }}
            variant="outlined"
          >
            Login
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default SignUpPage;
