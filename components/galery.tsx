export default function Galery() {
  return (
      <div className="container mx-auto p-2 text-center pt-20">
          <h2 className="text-2xl">MY GALLERY</h2>
          <GaleryProps buktipoto="/images/coding.jpg" sebagai="Coding" />
          <GaleryProps buktipoto="/images/sepedah.jpg" sebagai="Bersepeda" />
          <GaleryProps buktipoto="/images/futsal.jpg" sebagai="Futsal" />
          <GaleryProps buktipoto="/images/badminton123.jpg" sebagai="Badminton" />
      </div>
  );
}

interface GaleryPropsInterface {
  buktipoto: string;
  sebagai: string;
}

function GaleryProps(props: GaleryPropsInterface) {
  return (
      <div className="border-2 border-indigo-500/75 rounded-lg bg-white p-2 my-5">
          <div className="container mx-auto">
              <div className="grid grid-cols-12 gap-1">
                  {/* Tampilkan Gambar */}
                  <div className="col-span-12 md:col-span-4">
                      <img
                          src={props.buktipoto}
                          alt={props.sebagai}
                          className="w-full h-auto rounded-lg"
                          style={{ maxHeight: "200px", objectFit: "cover" }}
                      />
                  </div>
                  
                  {/* Tampilkan Teks */}
                  <div className="col-span-12 md:col-span-8">
                      <p>{props.sebagai}</p>
                  </div>
              </div>
          </div>
      </div>
  );
}
