"use client";
import EditorJS from '@editorjs/editorjs';
import { useEffect, useRef, useState } from 'react';

// Ignore the red-lines below; if its still troubling your eyes then add @ts-ignore before each import 
// @ts-ignore
import Header from '@editorjs/header';
import Quote from '@editorjs/quote';
import List from "@editorjs/list";
import Checklist from '@editorjs/checklist'
import SimpleImage from "@editorjs/simple-image";
import CodeTool from '@editorjs/code';
import CodeBox from '@bomdi/codebox';
import Alert from 'editorjs-alert';
import { toast } from 'sonner';
import { useMutation } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { useParams } from 'next/navigation';


// https://editorjs.io/saving-data/
const rawDocument = {
    "time": 1550476186479,
    "blocks": [
        {
            data: {
                text: 'Document Name',
                level: 2,
            },
            id: '53478154932154',
            type: 'header'
        },
        {
            data: {
                level: 4,
            },
            id: '53478w154932154',
            type: 'header'
        },
    ],
    "version": "2.8.1"
};

export default function Editor({ onSaveTrigger }: any) {
    const ref = useRef<EditorJS>();
    const [document, setDocument] = useState(rawDocument);
    const updateDocument = useMutation(api.files.updateDocumentInFile);
    const { fileId }: any = useParams();
    // console.log(fileId);


    function initializeEditor() {
        const editor = new EditorJS({
            /**
             * Id of Element that should contain Editor instance
             */
            holder: 'editorjs',
            tools: {
                // header: Header,
                header: {
                    class: Header,
                    shortcut: 'CMD+SHIFT+H',
                    config: {
                        placeholder: 'Enter a header',
                    }
                },

                quote: {
                    class: Quote,
                    inlineToolbar: true,
                    shortcut: 'CMD+SHIFT+O',
                    config: {
                        quotePlaceholder: 'Enter a quote',
                        captionPlaceholder: 'Quote\'s author',
                    },
                },

                list: {
                    class: List,
                    inlineToolbar: true,
                    config: {
                        defaultStyle: 'unordered'
                    }
                },

                checklist: {
                    class: Checklist,
                    inlineToolbar: true,
                },

                image: SimpleImage,
                code: CodeTool,

                codeBox: {
                    class: CodeBox,
                    config: {
                        themeURL: 'https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@9.18.1/build/styles/dracula.min.css', // Optional
                        themeName: 'atom-one-dark', // Optional
                        useDefaultTheme: 'light' // Optional. This also determines the background color of the language select drop-down
                    }
                },

                alert: {
                    class: Alert,
                    inlineToolbar: true,
                    shortcut: 'CMD+SHIFT+A',
                    config: {
                        defaultType: 'primary',
                        messagePlaceholder: 'Enter something',
                    },
                },


            },
            data: document
        });

        ref.current = editor;
    }

    function onSaveDocument() {
        if (ref.current) {
            ref.current.save().then((outputData) => {
                console.log('Article data: ', outputData);
                updateDocument({
                    _id: fileId,
                    document: JSON.stringify(outputData)
                }).then((resp) => {
                    console.log("Saved successfully", resp);
                    toast("File saved successfully");
                });
            }).catch((error) => {
                console.log('Saving failed: ', error);
                toast("Unable to save file");
            });
        }
    }

    useEffect(() => {
        initializeEditor();
    }, []);

    useEffect(() => {
        console.log("trigger value", onSaveTrigger);
        onSaveTrigger && onSaveDocument();
    }, [onSaveTrigger]);


    return (
        <div>
            <div id="editorjs"></div>
        </div>
    )
}