"use client";
import { Excalidraw, MainMenu, WelcomeScreen } from "@excalidraw/excalidraw";
import { Github, Twitter } from "lucide-react";

export default function WhiteBoard() {
    return (
        <div style={{ height: "100%" }}>
            <Excalidraw
                onChange={
                    (excalidrawElements, appState, files) => console.log([excalidrawElements, appState, files])
                }
                UIOptions={{
                    canvasActions: {
                        saveToActiveFile: false,
                        loadScene: false,
                        export: false,
                    },
                }}
            >

                <MainMenu>
                    <MainMenu.DefaultItems.ClearCanvas />
                    <MainMenu.DefaultItems.SaveAsImage />
                    <MainMenu.DefaultItems.ToggleTheme />
                    <MainMenu.DefaultItems.ChangeCanvasBackground />
                </MainMenu>
                <WelcomeScreen>
                    <WelcomeScreen.Hints.HelpHint />
                    <WelcomeScreen.Hints.MenuHint />
                    <WelcomeScreen.Hints.ToolbarHint />
                    <WelcomeScreen.Center>
                        <WelcomeScreen.Center.Heading>
                            Welcome to my app folks!
                        </WelcomeScreen.Center.Heading>
                        <WelcomeScreen.Center.MenuItemLink href="https://github.com/utk145">
                            <div className="flex items-center gap-4">
                                <Github />
                                Checkout my GitHub for other projects
                            </div>
                        </WelcomeScreen.Center.MenuItemLink>
                    </WelcomeScreen.Center>
                </WelcomeScreen>

            </Excalidraw>
        </div>

    )
}