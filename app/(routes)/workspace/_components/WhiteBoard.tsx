"use client";
import { Excalidraw, MainMenu, WelcomeScreen } from "@excalidraw/excalidraw";
import { Github, Twitter } from "lucide-react";
import { FileType } from "../../dashboard/_components/FilesList";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export default function WhiteBoard({ onSaveTrigger, fileId, fileData }: { onSaveTrigger: any, fileId: any, fileData: FileType }) {

    // lib functions
    const updateWhiteboard = useMutation(api.files.updateWhiteboardInFile);

    // states
    const [whiteBoardData, setWhiteBoardData] = useState<any>();
    console.log("fileData from whiteboard", fileData);

    function onSaveWhiteboard() {
        updateWhiteboard({
            _id: fileId,
            whiteboard: JSON.stringify(whiteBoardData)
        }).then((resp) => {
            console.log("Saved successfully", resp);
            toast("File saved successfully");
        }).catch((error) => {
            console.log('Saving failed: ', error);
            toast("Unable to save file");
        });
    };

    useEffect(() => {
        onSaveTrigger && onSaveWhiteboard();
    }, [onSaveTrigger])


    return (
        <div style={{ height: "100%" }}>
            {fileData && <Excalidraw
                initialData={{
                    elements: fileData && fileData.whiteboard ? JSON.parse(fileData?.whiteboard) : whiteBoardData
                }}
                onChange={
                    (excalidrawElements, appState, files) => {
                        console.log([excalidrawElements, appState, files]);
                        setWhiteBoardData(excalidrawElements);
                    }
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
            }
        </div>

    )
}