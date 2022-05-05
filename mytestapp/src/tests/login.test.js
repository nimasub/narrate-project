import {
    signInWithEmailAndPassword,
    signOutFirebase,
    init,
    isAuthenticated,
    getIdToken
} from './firebase';

describe('Firebase Util Test Suite', () => {
    beforeAll(async () => {
        jest.setTimeout(10000);
        await init();
    });

    beforeEach(async () => {
        await signOutFirebase();
    });
});

test('signInWithEmailAndPassword with wrong credential throws error', async () => {
        let error = '';
        try {
            await signInWithEmailAndPassword('unitTest@gmail.com', '1');
        } catch (err) {
            error = err.toString();
        }

        expect(error).toEqual(`Error: The password is invalid or the user does not have a password.`);
});

test('signInWithEmailAndPassword with correct credential logs in', async() => {
    const username = await signInWithEmailAndPassword(
        'tester1@gmail.com',
        'passwordNAS'
    );
    expect(username.user).toBeTruthy();
    expect(isAuthenticated()).toBe(true);
});

test('signOutFirebase works', async () => {
    await signInWithEmailAndPassword('tester1@gmail.com', 'passwordNAS');
    expect(isAuthenticated()).toBe(true);
    await signOutFirebase();
    expect(isAuthenticate()).toBe(false);
});

test('isAuthenticated returns false if not authenticated', () => {
    expect(isAuthenticated()).toBe(false);
});

test('isAuthenticated returns true if user is authenticated and verified', async () => {
    await signInWithEmailAndPassword('narrateautobiography@gmail.com', 'passwordNAS');
    expect(isAuthenticated()).toBe(true);
});