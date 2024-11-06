function Profile(){
    return <img src={foto.src} alt="Dede Rahmat Supriyadi" className="fotoku"/>;

}
import foto from "../foto.jpg";
export default function Hero(){
    return(
        <div className="container mx-auto p-2 text-center">
            <h1 className="text-gray-300 font-bold">CV ONLINE</h1>
            <h2 className="text-3x1">Dede Rahmat</h2>
            <Profile/>
       <p>
        Saya adalah mahasiswa ma'soem semester 5 jurusan sistem infomasi.
       </p>
        </div>
    );
}
