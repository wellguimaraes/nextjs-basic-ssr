import type { GetServerSideProps, NextPage } from 'next'

interface IProps {
  name: string
}

const Home: NextPage<IProps> = ({name}) => {
  return (
    <div>
      Hello {name}!
    </div>
  )
}

export const getServerSideProps: GetServerSideProps<IProps> = async (_context) => {
  return {
    props: {
      name: 'John Doe'
    }
  }
}

export default Home
