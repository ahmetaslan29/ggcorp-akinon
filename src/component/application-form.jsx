// components/RegistrationForm.js
"use client";
import { useRef, useState } from "react";
import { Button } from "./web-components/button";
import clsx from "clsx";

const RegistrationForm = () => {
  const [teamMembers, setTeamMembers] = useState([
    { name: "", surname: "", email: "", nickname: "" },
  ]);
  const addButtonRef = useRef(null);
  const addTeamMember = () => {
    setTeamMembers([
      ...teamMembers,
      { name: "", surname: "", email: "", nickname: "" },
    ]);
    if (teamMembers.length >= 4) {
      addButtonRef.current.style.display = "none";
      return;
    }
  };

  const removeTeamMember = (index) => {
    setTeamMembers(teamMembers.filter((_, i) => i !== index));
    if (teamMembers.length <= 5) {
      addButtonRef.current.style.display = "block";
      return;
    }
  };

  const handleTeamMemberChange = (index, event) => {
    const { name, value } = event.target;
    const updatedTeamMembers = teamMembers.map((member, i) =>
      i === index ? { ...member, [name]: value } : member
    );
    setTeamMembers(updatedTeamMembers);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Form verilerini burada işleyebilirsin
    console.log("Form Submitted", teamMembers);
  };

  return (
    <div className="max-w-4xl mx-auto p-8  rounded-lg  my-5">
      <h1 className="text-3xl font-bold text-center text-[#d2b86a] mb-6">
        Takım Kayıt Formu
      </h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Ad Soyad */}
        <div className="grid grid-cols-1 gap-6 ">
          <label className="block ">
            <span className="text-gray-700">Ad Soyad</span>
            <input
              type="text"
              name="fullName"
              className="mt-1 block w-full px-4 py-2 bg-white border border-gray-300  shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
              required
            />
          </label>

          {/* Telefon */}
          <label className="block">
            <span className="text-gray-700">Telefon</span>
            <input
              type="tel"
              name="phone"
              className="mt-1 block w-full px-4 py-2 bg-white border border-gray-300  shadow-sm focus:outline-none focus:ring focus:ring-blue-200 "
              required
            />
          </label>

          {/* Email */}
          <label className="block">
            <span className="text-gray-700">Mail Adresi</span>
            <input
              type="email"
              name="email"
              className="mt-1 block w-full px-4 py-2 bg-white border border-gray-300  shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
              required
            />
          </label>

          {/* Takım Adı (Opsiyonel) */}
          <label className="block">
            <span className="text-gray-700">Takım Adı (Opsiyonel)</span>
            <input
              type="text"
              name="teamName"
              className="mt-1 block w-full px-4 py-2 bg-white border border-gray-300  shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
            />
          </label>

          {/* LoL Nickname */}
          <label className="block">
            <span className="text-gray-700">LoL Nickname</span>
            <input
              type="text"
              name="lolNickname"
              className="mt-1 block w-full px-4 py-2 bg-white border border-gray-300  shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
              required
            />
          </label>

          {/* LoL Ligi */}
          <label className="block">
            <span className="text-gray-700">LoL Ligi</span>
            <input
              type="text"
              name="lolLeague"
              className="mt-1 block w-full px-4 py-2 bg-white border border-gray-300  shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
              required
            />
          </label>
          <label className="block">
            <span className="text-gray-700">Yedek Oynarmısın</span>
            <select
              type="text"
              name="backup"
              className="mt-1 block w-full px-4 py-2 bg-white border border-gray-300  shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
              required
            >
              <option value="yes">Evet</option>
              <option value="no">Hayır</option>
            </select>
          </label>
        </div>

        {/* Takım Üyeleri */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-[#d2b86a]">
            Takım Üyeleri (Opsiyonel)
          </h2>
          {teamMembers.map((member, index) => (
            <div key={index} className="grid grid-cols-1 gap-6 relative">
              <h3 className="text-lg font-semibold">Üye {index + 1}</h3>

              <label className="block">
                <span className="text-gray-700">Ad</span>
                <input
                  type="text"
                  required
                  name="name"
                  value={member.name}
                  onChange={(e) => handleTeamMemberChange(index, e)}
                  className="mt-1 block w-full px-4 py-2 bg-white border border-gray-300  shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
                />
              </label>

              <label className="block">
                <span className="text-gray-700">Soyad</span>
                <input
                  type="text"
                  name="surname"
                  required
                  value={member.surname}
                  onChange={(e) => handleTeamMemberChange(index, e)}
                  className="mt-1 block w-full px-4 py-2 bg-white border border-gray-300  shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
                />
              </label>

              <label className="block">
                <span className="text-gray-700">Email Adresi</span>
                <input
                  type="email"
                  name="email"
                  required
                  value={member.email}
                  onChange={(e) => handleTeamMemberChange(index, e)}
                  className="mt-1 block w-full px-4 py-2 bg-white border border-gray-300  shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
                />
              </label>

              <label className="block">
                <span className="text-gray-700">LoL Nickname</span>
                <input
                  type="text"
                  name="nickname"
                  required
                  value={member.nickname}
                  onChange={(e) => handleTeamMemberChange(index, e)}
                  className="mt-1 block w-full px-4 py-2 bg-white border border-gray-300  shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
                />
              </label>

              {/* Sil Butonu */}
              <button
                type="button"
                onClick={() => removeTeamMember(index)}
                className="absolute top-0 right-0 text-red-600 font-semibold"
              >
                &#10060;
              </button>
            </div>
          ))}
        </div>
        <div
          className={clsx(
            "grid grid-cols-1 gap-3",
            "md:grid-cols-2 md:gap-6 items-center"
          )}
        >
          <Button
            type="button"
            onClick={addTeamMember}
            ref={addButtonRef}
            className="w-full text-white inline-block  px-6 py-3 !bg-[#4B4B4B] hover:!bg-white hover:border-[#4B4B4B] hover:text-black font-semibold border-transparent"
          >
            Takım Üyesi Ekle
          </Button>

          <Button
            type="submit"
            className="w-full py-2 px-4 text-white shadow-md bg-[#04a550] border-transparent hover:border-[#04a550] hover:bg-white hover:text-black focus:outline-none"
          >
            Gönder
          </Button>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;
