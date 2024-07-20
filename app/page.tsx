import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const topics = [
    {
      name: 'React.memo',
      route: 'memo'
    },
    {
      name: 'Promises',
      route: 'promises'
    },
    {
      name: 'setTimeout',
      route: 'set-timeout'
    },
    {
      name: 'useCallback',
      route: 'use-callback'
    },
    {
      name: 'useContext',
      route: 'use-context'
    },
    {
      name: 'useEffect',
      route: 'use-effect'
    },
    {
      name: 'useMemo',
      route: 'use-memo'
    },
    {
      name: 'useReducer',
      route: 'use-reducer'
    },
    {
      name: 'useRef',
      route: 'use-ref'
    }
  ]
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {topics.map((topic) => 
        <Link href={topic.route} key={topic.route}>
          {topic.name}
        </Link>
      )}
    </main>
  );
}
