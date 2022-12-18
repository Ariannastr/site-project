import Image from "next/image"


export default function Gallery({ photos, onClick }: { photos: string[], onClick: (photo:string) =>void }) {
  return (
    <>
      {photos.map((p) => {
        return <Image key={p} alt={""} onClick={()=>onClick(p)} src={p} width={100} height={150}></Image>
      })}
    </>
  )
}
