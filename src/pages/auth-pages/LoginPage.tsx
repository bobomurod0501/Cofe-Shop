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
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "../../validations/scheme";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/config";
import { toast } from "react-toastify";
import logoImage from "../../../public/wp11391338.jpg";

// context
import { useAuthContext } from "../../context/authContext";

interface LoginFormDataTypes {
  email: string;
  password: string;
}
const LoginPage = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const navigate = useNavigate();
  const { isAuth, setIsAuth } = useAuthContext();
  const { control, handleSubmit, reset } = useForm<LoginFormDataTypes>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  if (isAuth) return <Navigate to="/" replace />;

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const onSubmit = (data: { email: string; password: string }) => {
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then(async (userCredential) => {
        const user = userCredential.user;
        const token = await user.getIdToken();
        localStorage.setItem("access_token", token);
        toast.success("successfully sign in");
        reset({
          email: "",
          password: "",
        });
        setIsAuth(true);
        navigate("/");
      })
      .catch(() => {
        toast.error("Email or Passwprd is incorrect");
      });
  };
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
      <form onSubmit={handleSubmit(onSubmit)}>
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
            Login
          </Typography>
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
                <InputLabel htmlFor="outlined-adornment-password">
                  Password
                </InputLabel>
                <OutlinedInput
                  {...field}
                  id="outlined-adornment-password"
                  type={showPassword ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label={
                          showPassword ? "Hide password" : "Show password"
                        }
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
          <Button
            type="submit"
            fullWidth
            sx={{ background: "#552B10" }}
            variant="contained"
          >
            Login
          </Button>
          <Button
            onClick={() => navigate("/auth/signup")}
            fullWidth
            sx={{ borderColor: "#552B10", color: "#552B10", mt: 2 }}
            variant="outlined"
          >
            Sign up
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default LoginPage;
