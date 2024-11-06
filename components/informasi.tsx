export default function Informasi() {
    return (
      <div className="container mx-auto p-2 text-center pt-20">
        <h2 className="text-2xl mb-6">INFORMASI PRIBADI</h2>
        
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border-collapse">
            <tbody>
              <tr>
                <td className="border px-4 py-2 text-left font-semibold">TTL</td>
                <td className="border px-4 py-2 text-left">Sumedang, 24 Juni 2023</td>
              </tr>
              <tr>
                <td className="border px-4 py-2 text-left font-semibold">Gender</td>
                <td className="border px-4 py-2 text-left">Laki-Laki</td>
              </tr>
              <tr>
                <td className="border px-4 py-2 text-left font-semibold">Tinggi Badan</td>
                <td className="border px-4 py-2 text-left">163 cm</td>
              </tr>
              <tr>
                <td className="border px-4 py-2 text-left font-semibold">Berat Badan</td>
                <td className="border px-4 py-2 text-left">59 kg</td>
              </tr>
              <tr>
                <td className="border px-4 py-2 text-left font-semibold">Status Pernikahan</td>
                <td className="border px-4 py-2 text-left">Belum Menikah</td>
              </tr>
              <tr>
                <td className="border px-4 py-2 text-left font-semibold">Whatsapp</td>
                <td className="border px-4 py-2 text-left">08817854679</td>
              </tr>
              <tr>
                <td className="border px-4 py-2 text-left font-semibold">Email</td>
                <td className="border px-4 py-2 text-left">dederahmatsupriyadi@gmail.com</td>
              </tr>
            </tbody>
          </table>
        </div>
  
        
      </div>
    );
  }
  
  interface InformasiProps {
    sekil: string;
    sebagai: string;
  }
  
  function SkillProps(props: InformasiProps) {
    return (
      <div className="border-2 border-indigo-500/75 rounded-lg bg-white p-2 my-5">
        <div className="container mx-auto">
          <div className="grid grid-cols-12 gap-1">
            <div className="col-span-12 md:col-span-4">{props.sekil}</div>
            <div className="col-span-12 md:col-span-4">{props.sebagai}</div>
          </div>
        </div>
      </div>
    );
  }
  