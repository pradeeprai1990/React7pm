import React from 'react'
import Header from '../common/Header'

export default function Login() {
  return (
    <div>
        <Header/>
        
        <div class="flex items-center min-h-screen p-4 bg-gray-100 lg:justify-center">
   <div class="flex flex-col overflow-hidden bg-white rounded-md shadow-lg max md:flex-row md:flex-1 lg:max-w-screen-md">
      <div class="p-4 py-6 text-white bg-blue-500 md:w-80 md:flex-shrink-0 md:flex md:flex-col md:items-center md:justify-evenly">
         <div class="my-3 text-4xl font-bold tracking-wider text-center"><a href="#">K-WD</a></div>
         <p class="mt-6 font-normal text-center text-gray-300 md:mt-0">With the power of K-WD, you can now focus only on functionaries for your digital products, while leaving the UI design on us!</p>
         <p class="flex flex-col items-center justify-center mt-10 text-center"><span>Don't have an account?</span><a href="#" class="underline">Get Started!</a></p>
         <p class="mt-6 text-sm text-center text-gray-300">Read our <a href="#" class="underline">terms</a> and <a href="#" class="underline">conditions</a></p>
      </div>
      <div class="p-5 bg-white md:flex-1">
         <h3 class="my-4 text-2xl font-semibold text-gray-700">Account Login</h3>
         <form action="#" class="flex flex-col space-y-5">
            <div class="flex flex-col space-y-1"><label for="email" class="text-sm font-semibold text-gray-500">Email address</label><input type="email" id="email" name="email" class="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200" fdprocessedid="6088xdm"/></div>
            <div class="flex flex-col space-y-1">
               <div class="flex items-center justify-between"><label for="password" class="text-sm font-semibold text-gray-500">Password</label><a href="#" class="text-sm text-blue-600 hover:underline focus:text-blue-800">Forgot Password?</a></div>
               <input type="password" name="password" id="password" class="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200" fdprocessedid="ytsshk"/>
            </div>
            <div class="flex items-center space-x-2"><input type="checkbox" id="remember" class="w-4 h-4 transition duration-300 rounded focus:ring-2 focus:ring-offset-0 focus:outline-none focus:ring-blue-200"/><label for="remember" class="text-sm font-semibold text-gray-500">Remember me</label></div>
            <div><button type="submit" class="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-blue-500 rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-blue-200 focus:ring-4" fdprocessedid="dnxs">Log in</button></div>
            <div class="flex flex-col space-y-5">
               <span class="flex items-center justify-center space-x-2"><span class="h-px bg-gray-400 w-14"></span><span class="font-normal text-gray-500">or login with</span><span class="h-px bg-gray-400 w-14"></span></span>
               <div class="flex flex-col space-y-4">
                  <button class="flex items-center justify-center px-4 py-2 space-x-2 transition-colors duration-300 border border-gray-800 rounded-md group hover:bg-gray-800 focus:outline-none" fdprocessedid="xyenwr">
                     <div class="w-5 text-lg text-gray-800 fill-current group-hover:text-white flex justify-center items-center">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 488 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                           <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path>
                        </svg>
                     </div>
                     <span class="text-sm font-medium text-gray-800 group-hover:text-white">Login with Google</span>
                  </button>
                  <button href="#" class="flex items-center justify-center px-4 py-2 space-x-2 transition-colors duration-300 border border-blue-500 rounded-md group hover:bg-blue-500 focus:outline-none" fdprocessedid="drabm">
                     <div class="w-5 text-xl text-blue-500 group-hover:text-white">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                           <path fill-rule="evenodd" d="M480 257.35c0-123.7-100.3-224-224-224s-224 100.3-224 224c0 111.8 81.9 204.47 189 221.29V322.12h-56.89v-64.77H221V208c0-56.13 33.45-87.16 84.61-87.16 24.51 0 50.15 4.38 50.15 4.38v55.13H327.5c-27.81 0-36.51 17.26-36.51 35v42h62.12l-9.92 64.77H291v156.54c107.1-16.81 189-109.48 189-221.31z"></path>
                        </svg>
                     </div>
                     <span class="text-sm font-medium text-blue-500 group-hover:text-white">Login with Facebook</span>
                  </button>
               </div>
            </div>
         </form>
      </div>
   </div>
</div>
    </div>
  )
}
