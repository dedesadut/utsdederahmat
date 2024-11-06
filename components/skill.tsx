export default function Skill(){
    return (
      <div className="container mx-auto p-2 text-center pt-20">
      <h2 className="text-2xl">SKILLS</h2>
      <SkillProps sekil="Bahasa Pemograman"  sebagai="Basic"/>
      <SkillProps sekil="Analisis"  sebagai="Intermedia"/>
      <SkillProps sekil="Progamer"  sebagai="Java"/>
      <SkillProps sekil="Sepak Bola"  sebagai="Sayap kanan"/>
</div>
    );
}

interface SkillProps{
    sekil: string;
    
    sebagai:string;
  } 
  function SkillProps(props: SkillProps){
    return(
      <div className="border-2 border-indigo-500/75 rounded-lg bg-white  p-2 my-5">
        <div className="container mx-auto">
          <div className="grid grid-cols-12 gap-1">
            <div className="col-span-12 md:col-span-4">{props.sekil}</div>
            
            <div className="col-span-12 md:col-span-4">{props.sebagai}</div>
          </div>
        </div>
      </div>
    );
  }
