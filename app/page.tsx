import {
  ChooseYourModel,
  Container,
  CopyrightClaims,
  Footer,
  FooterInfo,
  Header,
  HowDoWeWork,
  InputsComponent,
  ModelSearch,
  OurServices,
  Poster,
  RepairedStat,
  Reviews,
  Services,
} from "@/shared/components/shared";

export default function Home() {
  return (
    <main>
      <Container>
        <Header />
        <Poster />
      </Container>

      <section className="services-section">
        <Container>
          <Services />
        </Container>
      </section>

      <Container>
        <HowDoWeWork />
        <ModelSearch className="mt-40" />
        <ChooseYourModel className="mt-32" />
        <OurServices />
      </Container>

      <section className="services-section">
        <Container>
          <RepairedStat />
        </Container>
      </section>

      <Container>
        <InputsComponent
          title={"Заберем ваш сломанный смартфон прямо из дома"}
          text={"Оставьте Ваш номер телефона и мы перезвоним Вам прямо сейчас."}
        />
      </Container>

      <section className="services-section">
        <Container>
          <Reviews />
        </Container>
      </section>

      <Container>
        <InputsComponent
          title={"Нужна консультация?"}
          text={
            "Оставьте Ваш номер телефона и запишем вас на бесплатную консультацию."
          }
        />
      </Container>
      <FooterInfo />

      <section className="services-section">
        <Container>
          <Footer />
        </Container>
      </section>

      <Container>
        <CopyrightClaims />
      </Container>
    </main>
  );
}
