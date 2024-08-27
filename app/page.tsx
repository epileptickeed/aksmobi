import {
  ChooseYourModel,
  Container,
  Header,
  HowDoWeWork,
  ModelSearch,
  OurServices,
  Poster,
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
    </main>
  );
}
