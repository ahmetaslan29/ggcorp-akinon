import React from 'react';

export const Application = () => {
  return (
    <div className=" py-8 px-4 max-w-4xl mx-auto">
      {/* Turnuva Başlığı */}
      <h2 className="text-3xl font-bold text-center text-black mb-8">
        5V5 Turnuva Aşaması
      </h2>
      
      <div className="flex justify-center mb-12">
        <div className="bg-[#d2b86a] text-white py-2 px-8 rounded-md text-center w-3/4">
          <p className="text-lg font-semibold">Büyük Şampiyon</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-12">
        {/* Üst Fikstür */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Üst Fikstür</h3>
          <div className="mb-8">
            <div className="bg-black text-white py-2 px-4 rounded-md mb-4">
              Üst Fikstür Şampiyonu
            </div>
            <div className="flex justify-center space-x-4">
              <div className="bg-black text-white py-2 px-4 rounded-md">
                Finalist
              </div>
              <div className="bg-black text-white py-2 px-4 rounded-md">
              Finalist
              </div>
            </div>
          </div>
          <div className="flex justify-center space-x-4">
            <div className="bg-black text-white py-2 px-4 rounded-md">
              Takım 1
            </div>
            <div className="bg-black text-white py-2 px-4 rounded-md">
            Takım 2
            </div>
          </div>
          <div className="flex justify-center space-x-4 mt-4">
            <div className="bg-black text-white py-2 px-4 rounded-md">
            Takım 3
            </div>
            <div className="bg-black text-white py-2 px-4 rounded-md">
            Takım 4
            </div>
          </div>
        </div>

        {/* Alt Fikstür */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Alt Fikstür </h3>
          <div className="mb-8">
            <div className="bg-black text-white py-2 px-4 rounded-md mb-4">
              Alt Fikstür Şampiyonu
            </div>
            <div className="flex justify-center space-x-4">
              <div className="bg-black text-white py-2 px-4 rounded-md">
                lower finalist
              </div>
              <div className="bg-black text-white py-2 px-4 rounded-md">
                lower finalist
              </div>
            </div>
          </div>
          <div className="flex justify-center space-x-4">
            <div className="bg-black text-white py-2 px-4 rounded-md">
              Takım 2
            </div>
            <div className="bg-black text-white py-2 px-4 rounded-md">
              Takım 3
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
