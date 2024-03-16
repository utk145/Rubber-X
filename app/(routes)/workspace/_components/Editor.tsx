"use client";
import EditorJS from '@editorjs/editorjs';
import { useEffect } from 'react';

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


export default function Editor() {


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


            }
        });
    }


    useEffect(() => {
        initializeEditor();
    }, []);


    return (
        <div>
            <div id="editorjs"></div>
        </div>
    )
}