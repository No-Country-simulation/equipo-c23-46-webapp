import { CustomError } from '../errors/custom.error';

export class ProxyEntity {
  constructor(public name: string, public phone: string, public dni: string) {}

  static fromJson(object: { [key: string]: any }): ProxyEntity {
    const { proxy, phone_proxy, dni_proxy } = object;

    if (!proxy) throw CustomError.badRequest('Missing Name');
    if (!phone_proxy) throw CustomError.badRequest('Missing Phone');
    if (!dni_proxy) throw CustomError.badRequest('Missing DNI');

    return new ProxyEntity(proxy, phone_proxy, dni_proxy);
  }
}
