import {
  ChooseYourModel,
  Container,
  Header,
  HowDoWeWork,
  ModelSearch,
  OurServices,
  Poster,
  RepairedStat,
  Services,
} from '@/shared/components/shared';

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
    </main>
  );
}
