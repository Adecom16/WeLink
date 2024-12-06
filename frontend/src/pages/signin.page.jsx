import React, { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { Link } from "react-router-dom";
import { Eye, EyeOff, Loader, Lock, Mail, MessageSquare } from "lucide-react";
import AuthImagePattern from "../components/auth-image-pattern";
import toast from "react-hot-toast";

export default function SignInPage() {
  const { signIn, isLoggingIn } = useAuthStore();

  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const validateForm = () => {
    if (!formData.email.trim()) return toast.error("Email is required");
    if (!/\S+@\S+\.\S+/.test(formData.email))
      return toast.error("Invalid email format");
    if (!formData.password) return toast.error("Password is required");
    if (formData.password.length < 6)
      return toast.error("Password must be at least 6 characters");

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isSuccess = validateForm();
    if (isSuccess) {
      signIn(formData);
    }
  };

  const images = [
    "https://images.unsplash.com/photo-1665686377065-08ba896d16fd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c21pbGV8ZW58MHx8MHx8fDA%3D", // Replace with actual image URLs
    "https://media.istockphoto.com/id/1995180888/photo/women-smiling-during-an-exercise-outside-at-a-scenic-wellness-retreat.webp?a=1&b=1&s=612x612&w=0&k=20&c=CmbYGt0KD9X7gGOEXiLqi4wIBEvBWsCH_6Rrou0H7oI=",
    "https://media.istockphoto.com/id/2154091847/photo/man-at-the-therapy.webp?a=1&b=1&s=612x612&w=0&k=20&c=fXC_a3I1jptfcrsphi8Y7V2IJwiP_YFw1Xesk3zWE90=",
    "https://plus.unsplash.com/premium_photo-1679865370855-5a367b828f9a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c21pbGV8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1625019030820-e4ed970a6c95?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c21pbGV8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1665686374006-b8f04cf62d57?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhhcHB5fGVufDB8fDB8fHww",
    "https://media.istockphoto.com/id/2129354639/photo/happy-overweight-woman-listening-music-over-cell-phone-in-a-bus.webp?a=1&b=1&s=612x612&w=0&k=20&c=Zo2tTr2isldd3VrAZjqDtj7ramNP89Zyoc9b8beOTMs=",
    "https://media.istockphoto.com/id/2066301960/photo/man-with-eyeglasses-stand-at-home-use-mobile-phone-sms-texting.webp?a=1&b=1&s=612x612&w=0&k=20&c=KLXw9MLQLUekS4uXy9JzTnCy5qvSmet59WIK0tYaxEk=",
    "https://media.istockphoto.com/id/1396350277/photo/beautiful-woman-in-nature.webp?a=1&b=1&s=612x612&w=0&k=20&c=GXe0bB0WZ6zM87k4XBiQEZkXnMGWAIwfEQkJdcc0XQc=",
  ];
  

  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      <div className="flex flex-col justify-center items-center p-6 sm:p-12">
        <div className="w-full max-w-md space-y-8">
          {/* // ! LOGO */}
          <div className="items-center mb-8">
            <div className="flex flex-col items-center gap-2 group">
              <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <MessageSquare className="size-6 text-primary" />
              </div>
              <h1 className="text-2xl font-bold mt-2">Create Account</h1>
              <p className="text-base-content/60">
                Get started with your free account
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-2">
            <div className="form-control">
              <label htmlFor="email" className="label">
                <span className="label-text font-medium">Email</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="size-5 text-base-content/40" />
                </div>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="name@example.com"
                  className="input input-bordered w-full pl-10"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="form-control">
              <label htmlFor="password" className="label">
                <span className="label-text font-medium">Password</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="size-5 text-base-content/40" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  id="password"
                  placeholder="*** *** *** ***"
                  className="input input-bordered w-full px-10"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 text-base-content/40"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="size-5 text-base-content/40" />
                  ) : (
                    <Eye className="size-5 text-base-content/40" />
                  )}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="btn btn-primary w-full !mt-6"
              disabled={isLoggingIn}
            >
              {isLoggingIn ? (
                <>
                  <Loader className="size-4 animate-spin" />
                  Please wait...
                </>
              ) : (
                "Sign In"
              )}
            </button>
          </form>

          <div className="text-center">
            <p className="text-base-content/60">
              Don't have an account?{" "}
              <Link to="/sign-up" className="link link-primary">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>

      <AuthImagePattern
        title="Welcome back!"
        subtitle="Sign in to continue your conversations an catch up with your messages."
        images={images}
      />
    </div>
  );
}
