export default function RiwayatPekerjaan(){
    return (
      <div className="container mx-auto p-2 text-center pt-20">
      <h2 className="text-2xl">RIWAYAT PEKERJAAN</h2>
      <RowRiwayatPekerjaanProps tahun="2012-2013" tempat="Rumah Sakit Al-Islam" sebagai="Sebagai Dokter Spesialis"/>
      <RowRiwayatPekerjaanProps tahun="2014-2015" tempat="Bengkel Motor Jaya Abadi" sebagai="Sebagai Mekanik"/>
      <RowRiwayatPekerjaanProps tahun="2016-2017" tempat="Bandara Internasional Indonesia" sebagai="Bekerja Sebagai Pilot"/>
      <RowRiwayatPekerjaanProps tahun="2018-2019" tempat="Desa Mekarsari" sebagai="Sebagai Kepala Desa Mekarsari"/>
</div>
    );
}

interface RowRiwayatPekerjaanProps{
    tahun: string;
    tempat:string;
    sebagai:string;
  } 
  function RowRiwayatPekerjaanProps(props: RowRiwayatPekerjaanProps){
    return(
      <div className="border-2 border-indigo-500/75 rounded-lg bg-white  p-2 my-5">
        <div className="container mx-auto">
          <div className="grid grid-cols-12 gap-1">
            <div className="col-span-12 md:col-span-4">{props.tahun}</div>
            <div className="col-span-12 md:col-span-4">{props.tempat}</div>
            <div className="col-span-12 md:col-span-4">{props.sebagai}</div>
          </div>
        </div>
      </div>
    );
  }
