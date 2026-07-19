import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthHeader from '../components/auth/AuthHeader';
import SignUpForm from '../components/auth/SignUpForm';
import { useAuth } from '../contexts/AuthContext';

const SignUpPage: React.FC = () => {
  const navigate = useNavigate();
  const { register } = useAuth();
  const [error, setError] = useState<string | null>(null);
  const [showOTPModal, setShowOTPModal] = useState(false);
const [otp, setOTP] = useState("");
const [signupData, setSignupData] = useState<any>(null);

  const handleSignUp = async (formData: any) => {
    try {
      setError(null);
      const fullName = `${formData.firstName} ${formData.lastName}`.trim();
const response = await register(
  fullName,
  formData.email,
  formData.phone,
  formData.password
);

setSignupData({
  name: fullName,
  email: formData.email,
  phone: formData.phone,
  password: formData.password,
});

setShowOTPModal(true);

// TODO:
// Open OTP modal OR
// navigate("/verify-otp", {
//   state: {
//     name: fullName,
//     email: formData.email,
//     phone: formData.phone,
//     password: formData.password
//   }
// });
    } catch (err: any) {
      setError(err.response?.data?.message || err.message || 'Registration failed. Please try again.');
    }
  };
  const handleVerifyOTP = async () => {
  try {
    setError(null);

    const { data } = await userAPI.verifySignupOTP({
      ...signupData,
      otp,
    });

    if (!data.success) {
      setError(data.message);
      return;
    }

    setShowOTPModal(false);

    alert("Phone verified successfully! Please check your email to verify your account.");

    navigate("/signin");
  } catch (err: any) {
    setError(
      err.response?.data?.message ||
      err.message ||
      "OTP verification failed."
    );
  }
};

  return (
    <div className="min-h-screen bg-[#FAF8F4] flex items-center justify-center py-12 px-4">
      <div className="max-w-[520px] w-full">
        {/* Logo */}
        <AuthHeader />

        {/* Sign Up Card */}
        <div className="bg-white border border-[#E6E0DA] rounded-2xl p-8 shadow-xl">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="font-syne font-bold text-3xl text-[#221410] mb-2">
              Create Account
            </h1>
            <p className="font-manrope font-extralight text-sm text-[#4B5563]">
              Join BuildEstate and find your dream home
            </p>
          </div>

          {/* Error */}
          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-4">
              <p className="font-manrope text-sm text-red-600">{error}</p>
            </div>
          )}

          {/* Form */}
          <SignUpForm onSubmit={handleSignUp} />

          {/* Sign In Link */}
          <p className="text-center font-manrope font-extralight text-sm text-[#64748B]">
            Already have an account?{' '}
            <Link
              to="/signin"
              className="font-semibold text-[#D4755B] hover:text-[#C05621] transition-colors"
            >
              Sign In
            </Link>
          </p>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 font-manrope font-medium text-sm text-[#64748B] hover:text-[#D4755B] transition-colors"
          >
            <span className="material-icons text-base">arrow_back</span>
            <span>Back to Home</span>
          </Link>
        </div>
      </div>
      {showOTPModal && (
  <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
    <div className="bg-white rounded-xl p-6 w-[400px]">
      <h2 className="text-2xl font-bold mb-2">
        Verify Phone
      </h2>

      <p className="text-gray-600 mb-4">
        Enter the OTP sent to your mobile number.
      </p>

      <input
        type="text"
        maxLength={6}
        value={otp}
        onChange={(e) => setOTP(e.target.value)}
        placeholder="Enter OTP"
        className="w-full border rounded-lg p-3 mb-4"
      />

<button
  onClick={handleVerifyOTP}
  className="w-full bg-[#D4755B] text-white rounded-lg py-3"
>
  Verify OTP
</button>
    </div>
  </div>
)}
    </div>
  );
};

export default SignUpPage;