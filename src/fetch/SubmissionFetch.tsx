import { apiProblems as api } from '../session/interceptor';

export const runSubmission = async (code: File, problemId: number, userId: number, isPublic: boolean) => {
  const formData = new FormData();
  formData.append(`code`, code);
  formData.append(`user_id`, userId.toString());
  formData.append(`problem_id`, problemId.toString());
  formData.append(`is_public`, isPublic.toString());
  try {
    const response = await api.post('/problem/run', formData);
    return response;
  } catch (error) {
    console.error('Error fetching problems:', error);
  }
};
