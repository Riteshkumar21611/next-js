// app/page.js
import ServerComponent from "../components/ServerComponent.server";
export default function Home() {
  
  return (
    <div>
      <h1>Welcome to Your First Server Component!</h1>
      <ServerComponent />
    </div>
  );
}
