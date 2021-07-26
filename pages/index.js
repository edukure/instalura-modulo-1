import { Button } from '../src/components/commons/Button';
import Footer from '../src/components/commons/Footer';
import Menu from '../src/components/commons/Menu';
import Text from '../src/components/foundation/Text';

export default function Home() {
  return (
    <div
      style={{
        flex: '1',
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}>
      <Menu />

      <div>
        <Text variant="title" tag="h1">
          Compartilhe momentos e conecte-se com amigos
        </Text>
        
        <Text variant="paragraph1" tag="p">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
          industrys standard dummy text ever since the 1500s.
        </Text>

        <Button variant="primary.main">Cadastrar</Button>
      </div>

      <Footer />
    </div>
  );
}
