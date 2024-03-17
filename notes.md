Good commit practices :-

```
    feat -> feature
    fix -> bug fix
    docs -> documentation
    style -> formatting, lint stuff
    refactor -> code restructure without changing external behavior
    test -> adding missing tests
    chore -> maintenance
    init -> initial commit
    rearrange -> files moved, added, deleted etc
    update -> update code (versions, library compatibility)
```



---

### Functional Requirements:
- User should be able to signup and login
- Proper protected routes
- User can create team and files
- User Can Write on Document and Also Draw on whiteboard on Same Screen 
- User Can Save and Retrive Document & whiteboard 
- User Dashboard
- The system should provide basic drawing tools such as a pen, shapes, and text.
- Users should be able to export their drawings.
- Safe and scalable DataBase setup


### Non - Functional Requirements:
- Responsive webapp layout
- The system should be available and reliable, with minimal downtime.
- The user interface should be intuitive and user-friendly, requiring minimal training for users to start drawing collaboratively.

### Future Scope Features
- Auto Save file in Editor.ts after a given time-interval
- use state management like ContextAPI, Redux-Tookit, Zustand, etc etc etc

### In Project Resources: 

- Kinde auth docs : https://kinde.com/docs/developer-tools/nextjs-sdk/

- Convex docs : https://docs.convex.dev/quickstart/nextjs
    1. `npm install convex`
    2. `npx convex dev`
    3. Login to convex account to authorize your PC and then select the project. Rest is managed by convex. 
    4. We can skip the _sample data_ step as we are going to have actual user data.
    5. **Important**: Create a client component for the Convex provider: ConvexClientProvider.tsx in the app folder. `app/ConvexClientProvider.tsx`
    6. Wire up the ConvexClientProvider. In app/layout.tsx, wrap the children of the body element with the ConvexClientProvider.
    7. _**NOTE:** It is not like Prisma that whatver changes we do we've to re-deploy it, it is managed by Convex itself_.

- EditorJS Docs: https://editorjs.io/base-concepts/ and Plugins:- https://github.com/editor-js/awesome-editorjs

