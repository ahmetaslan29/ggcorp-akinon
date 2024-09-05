import React from "react";

const TournamentPage = () => {
  return (
    <div id="rules" className=" min-h-screen p-8  max-w-4xl mx-auto">
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-center text-[#d2b86a] mb-6">
          5V5 Turnuva Aşaması
        </h2>

        <h3 className="text-2xl font-semibold mt-8">Kurallar</h3>
        <ul className="list-disc ml-6 mt-4">
          <li>
            Akinon League of Legends Turnuvası'nda 4 takım mücadele edecektir.
          </li>
          <li>İsviçre Usulü elemelerdeki ilk 4 takım turnuvaya yükselir.</li>
          <li>
            Üst Fikstür'de başlayan takımlar, kaybettiklerinde Alt Fikstür'den
            devam eder.
          </li>
          <li>
            Turnuva maçları League of Legends Türkiye sunucularında
            oynanacaktır.
          </li>
          <li>
            Karşılaşmalar Bo3 formatında oynanacaktır. 2 oyun kazanan taraf
            galip sayılacaktır.
          </li>
          <li>
            Alt Fikstür'de herhangi bir maç kaybeden takımlar elenecektir.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-center text-[#d2b86a] mb-6">
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
