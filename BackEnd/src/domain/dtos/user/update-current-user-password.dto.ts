export class UpdateCurrentUserPasswordDto {
  private constructor(
    public currentPassword: string,
    public newPassword: string,
  ) { }

  static create(object: { [key: string]: any }): [{ [key: string]: string }?,UpdateCurrentUserPasswordDto?] {
    const { currentPassword, newPassword, passwordConfirmation } = object;

    const errors: { [key: string]: string } = {};

    if(!currentPassword) errors.currentPassword = 'Current password is required';
    if(!newPassword) errors.newPassword = 'newPassword is required';
    if(!passwordConfirmation) errors.passwordConfirmation = 'Password confirmation is required';
    if(newPassword && passwordConfirmation && newPassword !== passwordConfirmation) errors.passwordConfirmation = 'Passwords do not match';

    if (Object.keys(errors).length > 0) {
      return [errors];
    }

    return [undefined, new UpdateCurrentUserPasswordDto(currentPassword, newPassword)];
  }
}
