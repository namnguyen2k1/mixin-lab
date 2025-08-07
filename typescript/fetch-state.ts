export interface FetchState {
  readonly data: {
    status: number;
    message: string;
    data: any;
  } | null;
  readonly error: any | null;
}

export function toSuccess(res: any): FetchState {
  return {
    data: {
      data: res?.data ?? '',
      status: res?.status ?? -1,
      message: res?.message ?? ''
    },
    error: null
  };
}

export function toError(error: any): FetchState {
  return {
    data: null,
    error: error?.error ?? error
  };
}

export async function toFetchState(promise: Promise<any>): Promise<FetchState> {
  try {
    const res = await promise;
    return toSuccess(res);
  } catch (error: any) {
    return toError(error);
  }
}

export async function toFetchStateWithReason(promises: Promise<FetchState>[]): Promise<FetchState[]> {
  const listRes = await Promise.allSettled(promises);
  return listRes.map(res => {
    if (res.status === 'fulfilled') {
      return toSuccess(res.value);
    } else if (res.status === 'rejected') {
      return toError(res.reason);
    }
    return toError(null);
  });
}
