import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Eye, EyeOff, User, Mail, Lock } from 'lucide-react';
import { signUp, signIn, isSupabaseConfigured } from '../lib/supabase';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const signInSchema = z.object({
  email: z.string().email('Valid email is required'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

const signUpSchema = z.object({
  full_name: z.string().min(2, 'Full name is required'),
  email: z.string().email('Valid email is required'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  confirm_password: z.string(),
}).refine((data) => data.password === data.confirm_password, {
  message: "Passwords don't match",
  path: ["confirm_password"],
});

type SignInFormData = z.infer<typeof signInSchema>;
type SignUpFormData = z.infer<typeof signUpSchema>;

const AuthPage: React.FC = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const signInForm = useForm<SignInFormData>({
    resolver: zodResolver(signInSchema),
  });

  const signUpForm = useForm<SignUpFormData>({
    resolver: zodResolver(signUpSchema),
  });

  const onSignIn = async (data: SignInFormData) => {
    try {
      const { error } = await signIn(data.email, data.password);
      if (error) throw error;
      
      toast.success('Welcome back!');
      navigate('/');
    } catch (error: any) {
      toast.error(error.message || 'Sign in failed');
    }
  };

  const onSignUp = async (data: SignUpFormData) => {
    try {
      const { error } = await signUp(data.email, data.password, data.full_name);
      if (error) throw error;
      
      toast.success('Account created successfully!');
      navigate('/');
    } catch (error: any) {
      toast.error(error.message || 'Sign up failed');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-[#8A1538] text-white p-3 rounded-full">
              <User className="h-8 w-8" />
            </div>
          </div>
          <h2 className="text-3xl font-bold text-gray-900">
            {isSignUp ? 'Create Account' : 'Sign In'}
          </h2>
          <p className="mt-2 text-gray-600">
            {isSignUp 
              ? 'Join Accumatic to access exclusive products and offers'
              : 'Welcome back to Accumatic'
            }
          </p>
          {!isSupabaseConfigured && (
            <div className="mt-4 rounded-md bg-yellow-50 p-3 text-left">
              <p className="text-sm text-yellow-800">Supabase is not configured — authentication is currently disabled. To enable, copy <code className="font-mono">.env.example</code> to <code className="font-mono">.env</code> and set <code className="font-mono">VITE_SUPABASE_URL</code> and <code className="font-mono">VITE_SUPABASE_ANON_KEY</code>.</p>
            </div>
          )}
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          {isSignUp ? (
            <form onSubmit={signUpForm.handleSubmit(onSignUp)} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <input
                    {...signUpForm.register('full_name')}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8A1538] focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>
                {signUpForm.formState.errors.full_name && (
                  <p className="text-red-600 text-sm mt-1">
                    {signUpForm.formState.errors.full_name.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <input
                    {...signUpForm.register('email')}
                    type="email"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8A1538] focus:border-transparent"
                    placeholder="Enter your email"
                  />
                </div>
                {signUpForm.formState.errors.email && (
                  <p className="text-red-600 text-sm mt-1">
                    {signUpForm.formState.errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Password *
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <input
                    {...signUpForm.register('password')}
                    type={showPassword ? 'text' : 'password'}
                    className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8A1538] focus:border-transparent"
                    placeholder="Create a password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
                {signUpForm.formState.errors.password && (
                  <p className="text-red-600 text-sm mt-1">
                    {signUpForm.formState.errors.password.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Confirm Password *
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <input
                    {...signUpForm.register('confirm_password')}
                    type={showConfirmPassword ? 'text' : 'password'}
                    className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8A1538] focus:border-transparent"
                    placeholder="Confirm your password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                  >
                    {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
                {signUpForm.formState.errors.confirm_password && (
                  <p className="text-red-600 text-sm mt-1">
                    {signUpForm.formState.errors.confirm_password.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={signUpForm.formState.isSubmitting || !isSupabaseConfigured}
                className="w-full bg-[#8A1538] hover:bg-[#7A1230] disabled:bg-gray-400 text-white py-3 px-6 rounded-lg font-semibold transition-colors"
              >
                {!isSupabaseConfigured ? 'Disabled - Supabase not configured' : (signUpForm.formState.isSubmitting ? 'Creating Account...' : 'Create Account')}
              </button>
            </form>
          ) : (
            <form onSubmit={signInForm.handleSubmit(onSignIn)} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <input
                    {...signInForm.register('email')}
                    type="email"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8A1538] focus:border-transparent"
                    placeholder="Enter your email"
                  />
                </div>
                {signInForm.formState.errors.email && (
                  <p className="text-red-600 text-sm mt-1">
                    {signInForm.formState.errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Password *
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <input
                    {...signInForm.register('password')}
                    type={showPassword ? 'text' : 'password'}
                    className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8A1538] focus:border-transparent"
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
                {signInForm.formState.errors.password && (
                  <p className="text-red-600 text-sm mt-1">
                    {signInForm.formState.errors.password.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={signInForm.formState.isSubmitting || !isSupabaseConfigured}
                className="w-full bg-[#8A1538] hover:bg-[#7A1230] disabled:bg-gray-400 text-white py-3 px-6 rounded-lg font-semibold transition-colors"
              >
                {!isSupabaseConfigured ? 'Disabled - Supabase not configured' : (signInForm.formState.isSubmitting ? 'Signing In...' : 'Sign In')}
              </button>
            </form>
          )}

          <div className="mt-6 text-center">
            <button
              onClick={() => setIsSignUp(!isSignUp)}
              className="text-[#8A1538] hover:underline"
            >
              {isSignUp 
                ? 'Already have an account? Sign in'
                : "Don't have an account? Sign up"
              }
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;