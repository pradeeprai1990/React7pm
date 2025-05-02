import React from 'react'

export default function Login() {
    return (
        <div>
            <section className="bg-gray-50">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0" bis_skin_checked="1">
                    <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900">
                        <img className="" src="https://www.wscubetech.com/images/wscube-tech-logo-2.svg" alt="logo"/></a>
                    <form autocomplete="off" className="w-[500px] bg-white rounded-lg shadow-2xl p-6 space-y-4">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">Sign in to your account</h1>
                        <div bis_skin_checked="1"><label for="email" className="block mb-2 text-sm font-medium text-gray-900">Email</label>
                        
                        <input type="email" id="email" name="email" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="Enter Email" fdprocessedid="ubhuqg"/>
                        
                        
                        </div>
                        <div bis_skin_checked="1"><label for="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                        
                        <input type="password" id="password" name="password" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="Enter Password" fdprocessedid="lwgy"/>
                        
                        
                        </div>
                        <button type="submit" className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5" fdprocessedid="gtcpf2">Sign In</button>
                    </form>
                </div>
            </section>
        </div>
    )
}
