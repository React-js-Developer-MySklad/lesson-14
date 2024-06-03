export const httpRequest = <T = Response>(input: string, init?: RequestInit): Promise<T> =>
    fetch(`${input}`, init)
        .then(async (res) => {
            if (res.status === 200) {
                return res.json();
            }

            return Promise.reject(await res.json());
        });