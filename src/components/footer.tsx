"use client"

import React from 'react'
import { Github, Twitter, Linkedin } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-800 text-white py-8 mt-8">
      <div className="container mx-auto text-center">
        <p>&copy; {currentYear} Eudify. All rights reserved.</p>
        <div className="flex justify-center space-x-6 mt-4">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <Github size={24} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <Twitter size={24} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <Linkedin size={24} />
          </a>
        </div>
        <div className="mt-6">
          <p className="text-sm">Powered by Eudify</p>
          <p className="text-sm">Contact: support@eudify.com</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
