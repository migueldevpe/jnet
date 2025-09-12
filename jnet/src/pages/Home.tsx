import "./Home.css";

export default function Background() {

  return (
    <div id="home" className="w-full">
      <div className="home-bg bg-s flex justify-center w-full">
        <section className="w-full max-w-[1000px] h-[350px]">
          <div className="wallpaper h-full w-full">
            <img src="https://img.freepik.com/premium-photo/internet-things-background_34629-827.jpg" alt="" className="object-cover h-full w-full" />
          </div>
        </section>
      </div>
      <div className="bg-s flex justify-center w-full">
        <section className="home-text-bg bg-s w-full max-w-[1000px]">
          <p className="text-justify text-sm !leading-4.75">Na JNet, acreditamos que internet de qualidade deve ser simples, estável e acessível. Oferecemos planos rápidos, suporte ágil e tecnologia de ponta para manter você sempre online — seja para trabalhar, estudar ou se divertir.</p>
        </section>
      </div>
    </div>
  )

}