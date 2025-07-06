import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/context/AuthContext";
import { Eye, EyeOff, Loader2, AlertCircle } from "lucide-react";

const loginSchema = z.object({
  email: z
    .string()
    .min(1, "Username is required")
    .refine((val) => val.trim().length > 0, "Username cannot be empty"),
  password: z
    .string()
    .min(1, "Password is required")
    .min(3, "Password must be at least 3 characters"),
  rememberMe: z.boolean().default(false),
});

type LoginFormData = z.infer<typeof loginSchema>;

// Animation variants
const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

const logoVariants = {
  hidden: { opacity: 0, scale: 0.8, rotate: -10 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      type: "spring",
      stiffness: 100
    }
  }
};

const formVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const Index = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [authError, setAuthError] = useState<string>("");
  const navigate = useNavigate();
  const { login, isLoading, isAuthenticated } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
    watch,
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  const rememberMe = watch("rememberMe");

  // Redirect if already authenticated
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard");
    }
  }, [isAuthenticated, navigate]);

  const onSubmit = async (data: LoginFormData) => {
    setAuthError("");

    try {
      const result = await login(data.email, data.password);

      if (result.success) {
        navigate("/dashboard");
      } else {
        setAuthError(result.error || "Login failed. Please try again.");
      }
    } catch (error) {
      setAuthError("An unexpected error occurred. Please try again.");
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-white font-helvetica px-4 py-24 sm:py-32">
      <motion.div
        className="w-full max-w-[360px] flex flex-col gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header Section */}
        <motion.div
          className="flex flex-col items-center gap-6"
          variants={itemVariants}
        >
          {/* Bootstrap Logo */}
          <motion.div
            className="relative w-12 h-[38.25px]"
            variants={logoVariants}
            whileHover={{ scale: 1.05, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg
              width="48"
              height="39"
              viewBox="0 0 48 39"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-12 h-[38px]"
            >
              <path
                d="M5.29509 4.99875C5.20453 2.39812 7.23075 0 9.96956 0H38.0339C40.7727 0 42.7989 2.39812 42.7084 4.99875C42.6214 7.49691 42.7343 10.733 43.5487 13.3716C44.3658 16.0183 45.7435 17.6913 48 17.9062V20.3438C45.7435 20.5587 44.3658 22.2317 43.5487 24.8784C42.7343 27.517 42.6214 30.7531 42.7084 33.2513C42.7989 35.8519 40.7727 38.25 38.0339 38.25H9.96956C7.23075 38.25 5.20453 35.8519 5.29519 33.2513C5.38209 30.7531 5.26912 27.517 4.45463 24.8784C3.63769 22.2317 2.25656 20.5587 0 20.3438V17.9062C2.25647 17.6913 3.63769 16.0183 4.45463 13.3716C5.26912 10.733 5.38209 7.49691 5.29509 4.99875Z"
                fill="url(#paint0_linear_2_2)"
              />
              <g filter="url(#filter0_d_2_3)">
                <path
                  d="M25.0409 29.2928C29.475 29.2928 32.147 27.1218 32.147 23.5408C32.147 20.834 30.2405 18.8743 27.4096 18.5641V18.4513C29.4894 18.113 31.1215 16.1815 31.1215 14.0245C31.1215 10.9511 28.6951 8.9491 24.9976 8.9491H16.6782V29.2928H25.0409ZM19.9135 11.5291H24.2177C26.5575 11.5291 27.8862 12.5723 27.8862 14.4615C27.8862 16.4776 26.3408 17.6054 23.5388 17.6054H19.9135V11.5291ZM19.9135 26.7129V20.0163H24.1887C27.2507 20.0163 28.8395 21.1441 28.8395 23.3435C28.8395 25.5428 27.2941 26.7129 24.3765 26.7129H19.9135Z"
                  fill="url(#paint0_linear_2_3)"
                  stroke="white"
                  strokeWidth="0.1"
                />
              </g>
              <defs>
                <linearGradient
                  id="paint0_linear_2_2"
                  x1="7.13241"
                  y1="1.01231"
                  x2="49.0762"
                  y2="34.3073"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#9013FE" />
                  <stop offset="1" stopColor="#6610F2" />
                </linearGradient>
                <linearGradient
                  id="paint0_linear_2_3"
                  x1="18.1414"
                  y1="10.2881"
                  x2="27.5169"
                  y2="26.1443"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="white" />
                  <stop offset="1" stopColor="#F1E5FC" />
                </linearGradient>
                <filter
                  id="filter0_d_2_3"
                  x="0.628235"
                  y="-3.10091"
                  width="47.5687"
                  height="52.4438"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="8" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_2_3"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_2_3"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </motion.div>

          {/* Heading */}
          <motion.div
            className="flex flex-col items-center gap-3 w-full"
            variants={itemVariants}
          >
            <motion.h1
              className="text-bootstrap-text-primary text-[32px] font-medium leading-[120%] text-center"
              variants={itemVariants}
            >
              Log in to your account
            </motion.h1>
            <motion.p
              className="text-bootstrap-text-muted text-base font-normal leading-[150%] text-center"
              variants={itemVariants}
            >
              Welcome back! Please enter your details.
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Form Section */}
        <motion.div
          className="flex flex-col gap-2 w-full"
          variants={formVariants}
        >
          {/* Auth Error Message */}
          <AnimatePresence>
            {authError && (
              <motion.div
                className="flex items-center gap-2 p-3 text-sm text-red-600 bg-red-50 border border-red-200 rounded-md mb-4"
                initial={{ opacity: 0, y: -10, height: 0 }}
                animate={{ opacity: 1, y: 0, height: "auto" }}
                exit={{ opacity: 0, y: -10, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                <span>{authError}</span>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col w-full"
            variants={itemVariants}
          >
            {/* Email Field */}
            <div className="flex flex-col pb-4 w-full">
              <div className="flex pb-2 items-end gap-1 w-full">
                <Label className="text-bootstrap-text-primary text-base font-normal leading-[150%]">
                  Username
                </Label>
              </div>
              <div className="flex items-center w-full rounded-[4px]">
                <Input
                  {...register("email")}
                  type="text"
                  placeholder="Enter your username"
                  className={`flex px-3 py-[6px] items-center flex-1 rounded-[4px] border bg-white text-base font-normal leading-[150%] placeholder:text-bootstrap-text-muted focus-visible:ring-1 focus-visible:ring-bootstrap-primary focus-visible:ring-offset-0 h-auto ${
                    errors.email
                      ? "border-red-500 focus-visible:ring-red-500"
                      : "border-bootstrap-border"
                  }`}
                />
              </div>
              {errors.email && (
                <span className="text-sm text-red-500 mt-1">
                  {errors.email.message}
                </span>
              )}
            </div>

            {/* Password Field */}
            <div className="flex flex-col pb-4 w-full">
              <div className="flex pb-2 items-end gap-1 w-full">
                <Label className="text-bootstrap-text-primary text-base font-normal leading-[150%]">
                  Password
                </Label>
              </div>
              <div className="flex items-center w-full rounded-[4px]">
                <div className="relative flex items-center w-full rounded-[4px]">
                  <Input
                    {...register("password")}
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    className={`flex px-3 py-[6px] items-center flex-1 rounded-[4px] border bg-white text-base font-normal leading-[150%] placeholder:text-bootstrap-text-muted focus-visible:ring-1 focus-visible:ring-bootstrap-primary focus-visible:ring-offset-0 h-auto pr-10 ${
                      errors.password
                        ? "border-red-500 focus-visible:ring-red-500"
                        : "border-bootstrap-border"
                    }`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 flex items-center justify-center p-[1px] hover:bg-gray-100 rounded transition-colors"
                  >
                    {showPassword ? (
                      <Eye className="w-[14px] h-[11px] text-bootstrap-text-muted" />
                    ) : (
                      <EyeOff className="w-[14px] h-[11px] text-bootstrap-text-muted" />
                    )}
                  </button>
                </div>
              </div>
              {errors.password && (
                <span className="text-sm text-red-500 mt-1">
                  {errors.password.message}
                </span>
              )}
            </div>

            {/* Remember me & Forgot password row */}
            <div className="flex pb-2 justify-between items-center w-full">
              <div className="flex items-start gap-2">
                <div className="flex h-6 justify-center items-center">
                  <Checkbox
                    id="remember"
                    checked={rememberMe}
                    onCheckedChange={(checked) =>
                      setValue("rememberMe", checked as boolean)
                    }
                    className="w-4 h-4 rounded-[4px] border border-[#dee2e6] bg-white data-[state=checked]:bg-bootstrap-primary data-[state=checked]:border-bootstrap-primary"
                  />
                </div>
                <Label
                  htmlFor="remember"
                  className="text-bootstrap-text-primary text-base font-normal leading-[150%] cursor-pointer"
                >
                  Remember me
                </Label>
              </div>
              <a
                href="#"
                className="text-bootstrap-primary text-base font-normal leading-[150%] underline cursor-pointer hover:no-underline"
              >
                Forgot password
              </a>
            </div>

            {/* Actions Section */}
            <div className="flex flex-col gap-4 w-full">
              {/* Sign in button */}
              <Button
                type="submit"
                disabled={isSubmitting || isLoading}
                className="flex px-3 py-[6px] justify-center items-center gap-2 w-full rounded-[6px] border border-bootstrap-primary bg-bootstrap-primary text-white text-base font-normal leading-[150%] hover:bg-bootstrap-primary/90 h-auto disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting || isLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Signing in...
                  </>
                ) : (
                  "Sign in"
                )}
              </Button>

              {/* Sign in with Google button */}
              <Button
                type="button"
                variant="outline"
                disabled={isSubmitting || isLoading}
                className="flex px-[13px] py-[7px] justify-center items-center gap-2 w-full rounded-[4px] border border-bootstrap-primary bg-transparent text-bootstrap-primary text-base font-normal leading-[150%] hover:bg-bootstrap-primary/5 h-auto disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-bootstrap-primary"
                >
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="currentColor"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="currentColor"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="currentColor"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="currentColor"
                  />
                </svg>
                Sign in with Google
              </Button>
            </div>

            {/* Sign up link */}
            <div className="flex justify-center items-center gap-1 w-full pt-4">
              <span className="text-bootstrap-text-muted text-base font-normal leading-[150%]">
                Don't have an account?
              </span>
              <a
                href="#"
                className="text-bootstrap-primary text-base font-normal leading-[150%] underline cursor-pointer hover:no-underline"
              >
                Sign up
              </a>
            </div>
          </form>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Index;