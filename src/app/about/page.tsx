"use client";

import React from "react";
import {
  Hospital,
  FileText,
  TestTube2,
  CheckCircle,
  Users,
  Rocket,
  Handshake,
  Coins,
} from "lucide-react";

export default function AboutPage() {
  return (
    <main className="bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-6 py-12 sm:py-20">
        <div className="text-center">
          <p className="text-xl sm:text-2xl text-blue-500 uppercase font-bold tracking-wider">
            WELCOME TO MEDSTA
          </p>
          <h1 className="mt-4 text-3xl sm:text-5xl font-extrabold text-gray-900">
            Your Local Health Partner, Digitized.
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Simplifying healthcare for every corner of Bharat, one neighborhood at a
            time.
          </p>
        </div>

        <div className="mt-10">
          <section className="text-center">
            <h2 className="text-2xl font-bold text-gray-900">Who We Are</h2>
            <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
              Medsta is a hyper-local digital health marketplace headquartered in Barabanki, Uttar Pradesh. We are on a mission to make healthcare simple, affordable, and accessible across India's Tier 2 and Tier 3 cities. By connecting patients with local doctors, pharmacies, and labs, we bring trusted healthcare to your fingertips.
            </p>
          </section>

          <section className="mt-8 bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 text-center">What We Do</h2>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-start gap-4">
                <div className="bg-blue-50 text-blue-600 rounded-full p-3">
                  <Hospital className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold">Book Appointments</h3>
                  <p className="text-gray-600 text-sm">Online or in-clinic consultations.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-amber-50 text-amber-600 rounded-full p-3">
                  <FileText className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold">Order Medicines</h3>
                  <p className="text-gray-600 text-sm">Fast delivery from local pharmacies.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-green-50 text-green-600 rounded-full p-3">
                  <TestTube2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold">Schedule Lab Tests</h3>
                  <p className="text-gray-600 text-sm">Home sample collection & partner labs.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl shadow p-6">
              <h2 className="text-xl font-bold">Our Mission</h2>
              <p className="mt-3 text-gray-600">Empower households with reliable, tech-driven healthcare.</p>
            </div>
            <div className="bg-white rounded-2xl shadow p-6">
              <h2 className="text-xl font-bold">Our Vision</h2>
              <blockquote className="mt-3 border-l-4 border-blue-600 pl-4 italic text-gray-700">
                To be the most trusted healthcare companion for every Indian family.
              </blockquote>
            </div>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-bold text-gray-900 text-center">Why Choose Medsta?</h2>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl shadow p-6">
                <h3 className="font-semibold">For Patients</h3>
                <ul className="mt-3 space-y-2">
                  <li className="flex items-start gap-2"><CheckCircle className="text-green-500" /> <span className="text-sm text-gray-600">Total Convenience</span></li>
                  <li className="flex items-start gap-2"><CheckCircle className="text-green-500" /> <span className="text-sm text-gray-600">Trusted local partners</span></li>
                </ul>
              </div>
              <div className="bg-white rounded-2xl shadow p-6">
                <h3 className="font-semibold">For Providers</h3>
                <ul className="mt-3 space-y-2">
                  <li className="flex items-start gap-2"><CheckCircle className="text-green-500" /> <span className="text-sm text-gray-600">Digital Growth</span></li>
                  <li className="flex items-start gap-2"><CheckCircle className="text-green-500" /> <span className="text-sm text-gray-600">Simple management tools</span></li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-bold text-gray-900 text-center">Our Core Values</h2>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white rounded-2xl shadow p-4 text-center">
                <div className="mx-auto text-blue-600 mb-2 rounded-full bg-blue-50 w-10 h-10 flex items-center justify-center"><Handshake className="w-5 h-5" /></div>
                <div className="font-semibold">Trust First</div>
                <div className="text-sm text-gray-600 mt-1">Patient safety & provider integrity</div>
              </div>
              <div className="bg-white rounded-2xl shadow p-4 text-center">
                <div className="mx-auto text-amber-600 mb-2 rounded-full bg-amber-50 w-10 h-10 flex items-center justify-center"><Coins className="w-5 h-5" /></div>
                <div className="font-semibold">Accessibility</div>
                <div className="text-sm text-gray-600 mt-1">Affordable local care</div>
              </div>
              <div className="bg-white rounded-2xl shadow p-4 text-center">
                <div className="mx-auto text-indigo-600 mb-2 rounded-full bg-indigo-50 w-10 h-10 flex items-center justify-center"><Rocket className="w-5 h-5" /></div>
                <div className="font-semibold">Innovation</div>
                <div className="text-sm text-gray-600 mt-1">Simple tech for local problems</div>
              </div>
              <div className="bg-white rounded-2xl shadow p-4 text-center">
                <div className="mx-auto text-sky-600 mb-2 rounded-full bg-sky-50 w-10 h-10 flex items-center justify-center"><Users className="w-5 h-5" /></div>
                <div className="font-semibold">Community</div>
                <div className="text-sm text-gray-600 mt-1">Partnering with local providers</div>
              </div>
            </div>
          </section>

          <footer className="mt-8 text-center text-sm text-gray-500">
            <div>
              <a href="https://medsta.in" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 font-medium">
                medsta.in
              </a>
            </div>
            <div className="mt-1">Based in Barabanki, Uttar Pradesh</div>
          </footer>
        </div>
      </div>
    </main>
  );
}
