'use server';

export async function verifyUrl(url: string) {
  try {
    const fetched = await fetch(url);
    if (fetched.ok === false) return false;
  } catch (error) {
    console.error(error);
    return false;
  }

  return true;
}
