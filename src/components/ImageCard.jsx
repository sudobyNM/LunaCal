export default function ImageCard({ src }) {
  return (
    <div className="group relative rounded-2xl cursor-pointer aspect-[1.06/1]  w-31 aspect-[1.06/1] flex-shrink-0  min-w-0">
  <img
    src={src}
    alt="Gallery"
    className="w-full h-full object-cover object-center rounded-2xl transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] hover:rotate-[-2.1deg] hover:scale-[1.09] hover:shadow-[5px_5px_10px_4px_rgba(0,0,0,0.4)] filter saturate-[1.05] grayscale brightness-[0.9]  hover:grayscale-50  origin-bottom-left"
  />
</div>


  )
}

