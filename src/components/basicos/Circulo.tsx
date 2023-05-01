interface CirculoProps {
  texto: string
  quasePerfeito?: boolean
}

export default function Circulo(props: CirculoProps) {
  console.log(props)
  return (
    <div className={`
    flex justify-center items-center
      w-64 h-64 bg-cyan-500
      text-black font-black text-3xl
      ${props.quasePerfeito ? 'rounded-md' : 'rounded-full'}
    `}>
      {props.texto}
    </div>
  )
}