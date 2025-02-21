import MenuBar from "./components/MenuBar.jsx";
import TaskBoard from "./components/TaskBoard.jsx";

export default function App() {
    return (
        <div id="app">
            <div className="px-5 py-2">
                <MenuBar />

                {/* <!-- Main --> */}
                <div className="mt-5 flex h-screen items-start justify-start overflow-x-auto overflow-y-hidden">
                    <TaskBoard />
                </div>
            </div>
        </div>
    );
}
