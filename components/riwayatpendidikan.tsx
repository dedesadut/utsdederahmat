export default function RiwayatPendidikan(){
    return (
        <div className="container mx-auto p-2 text-center pt-20">
        <h2 className="text-2xl">RIWAYAT PENDIDIKAN</h2>
        <RowRiwayatProps jenjang="SD" sekolah="SDN Babakan Bandung" tahun="Tahun-"/>
        <RowRiwayatProps jenjang="MTS" sekolah="MTS Al-Irfan Tanjungsari" tahun="tahun-"/>
        <RowRiwayatProps jenjang="SMA" sekolah="SMA YKM Tanjungsari" tahun="tahun-"/>
        <RowRiwayatProps jenjang="Prodi Sistem Informasi" sekolah="Masoem Universitas" tahun="2022"/>
  </div>
    );
}

interface RowRiwayatProps{
    jenjang: string;
    sekolah:string;
    tahun:string;
}
function RowRiwayatProps(props: RowRiwayatProps){
    return(
      <div className="border-2 border-indigo-500/75 rounded-lg bg-white  p-2 my-5">
        <div className="container mx-auto">
          <div className="grid grid-cols-12 gap-1">
            <div className="col-span-12 md:col-span-4">{props.jenjang}</div>
            <div className="col-span-12 md:col-span-4">{props.sekolah}</div>
            <div className="col-span-12 md:col-span-4">{props.tahun}</div>
          </div>
        </div>
      </div>
    );
  }
