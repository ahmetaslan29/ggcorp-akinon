import React from 'react';

const TournamentPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-8">
      {/* 5v5 Turnuva Aşaması */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-center text-purple-800 mb-6">
          5V5 Turnuva Aşaması
        </h2>
        <div className="flex justify-center">
          <img src="/5v5-bracket.png" alt="5v5 Turnuva Bracket" className="w-2/3" />
        </div>
        <h3 className="text-2xl font-semibold mt-8">Kurallar</h3>
        <ul className="list-disc ml-6 mt-4">
          <li>Akinon League of Legends Turnuvası'nda 4 takım mücadele edecektir.</li>
          <li>İsviçre Usulü elemelerdeki ilk 4 takım turnuvaya yükselir.</li>
          <li>Üst Fikstür'de başlayan takımlar, kaybettiklerinde Alt Fikstür'den devam eder.</li>
          <li>Turnuva maçları League of Legends Türkiye sunucularında oynanacaktır.</li>
          <li>Karşılaşmalar Bo3 formatında oynanacaktır. 2 oyun kazanan taraf galip sayılacaktır.</li>
          <li>Alt Fikstür'de herhangi bir maç kaybeden takımlar elenecektir.</li>
        </ul>
      </section>

      {/* 1v1 Turnuva Aşaması */}
      <section>
        <h2 className="text-3xl font-bold text-center text-purple-800 mb-6">
          1 vs 1 Turnuva Aşaması
        </h2>
        <h3 className="text-2xl font-semibold">Kurallar</h3>
        <ul className="list-disc ml-6 mt-4">
          <li>İsviçre usulü oynanacak.</li>
          <li>Turnuvadaki her kişi diğer oyuncularla birer maç yapacak.</li>
          <li>Sıralama maç kazanma sayısına göre belirlenecek.</li>
          <li>Maçlar aramada oynanacak.</li>
        </ul>

        <h3 className="text-2xl font-semibold mt-8">Kazanma Koşulları</h3>
        <ul className="list-disc ml-6 mt-4">
          <li>100 minyon</li>
          <li>İlk kan</li>
          <li>İlk kule</li>
        </ul>
      </section>
    </div>
  );
};

export default TournamentPage;