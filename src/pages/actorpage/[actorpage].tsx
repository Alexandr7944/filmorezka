import { MyContainer } from "@/components";
import ActorPages from "@/components/ActorPage/ActorPage";
import { useRouter } from "next/router";
interface ActorProps {
  id: string | number;
}
const ActorPage: React.FC<ActorProps> = () => {
  const router = useRouter();
  const { actorpage } = router.query;

  return (
    <MyContainer>
      <div className="container">
        <ActorPages actorID={actorpage} />
      </div>
    </MyContainer>
  );
};

export default ActorPage;
