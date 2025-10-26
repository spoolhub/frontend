// src/utils/format.test.js

import { describe, it, expect } from 'vitest';
// Import hàm cần kiểm thử
import { abbreviateNumber } from './format';

// Nhóm các bài kiểm thử cho hàm abbreviateNumber
describe('abbreviateNumber', () => {
  // 1. Test các trường hợp cơ bản (nhỏ hơn 1k)
  it('should return the original number as a string for values less than 1000', () => {
    expect(abbreviateNumber(999)).toBe('999');
    expect(abbreviateNumber(0)).toBe('0');
    expect(abbreviateNumber(123)).toBe('123');
  });

  // 2. Test định dạng k (hàng nghìn)
  it('should format numbers into thousands (k)', () => {
    // Giá trị tròn
    expect(abbreviateNumber(1000)).toBe('1k');
    // Giá trị lẻ (làm tròn 1 chữ số thập phân)
    expect(abbreviateNumber(1234)).toBe('1.2k');
    // Giá trị lớn hơn
    expect(abbreviateNumber(9876)).toBe('9.9k');
    // Giá trị gần 100k
    expect(abbreviateNumber(99999)).toBe('100k');
  });

  // 3. Test định dạng M (hàng triệu)
  it('should format numbers into millions (M)', () => {
    // Giá trị tròn
    expect(abbreviateNumber(1000000)).toBe('1M');
    // Giá trị lẻ
    expect(abbreviateNumber(1250000)).toBe('1.3M');
    // Giá trị lớn
    expect(abbreviateNumber(99999999)).toBe('100M');
  });

  // 4. Test định dạng B (hàng tỷ)
  it('should format numbers into billions (B)', () => {
    // Giá trị tròn
    expect(abbreviateNumber(1000000000)).toBe('1B');
    // Giá trị lẻ
    expect(abbreviateNumber(1234567890)).toBe('1.2B');
  });

  // 5. Test tùy chọn số chữ số thập phân (`fixed`)
  it('should respect the "fixed" parameter', () => {
    // fixed = 2
    expect(abbreviateNumber(1234, 2)).toBe('1.23k');
    expect(abbreviateNumber(1234567, 2)).toBe('1.23M');

    // fixed = 0
    expect(abbreviateNumber(1234, 0)).toBe('1k'); // 1.234k -> 1k
    expect(abbreviateNumber(1500, 0)).toBe('2k'); // 1.5k -> 2k (làm tròn)
  });

  // 6. Test các trường hợp đầu vào không hợp lệ/cạnh
  it('should handle edge cases and invalid inputs', () => {
    // Đầu vào không phải số (NaN)
    expect(abbreviateNumber(NaN)).toBe('0');
    // Đầu vào không phải số (string)
    expect(abbreviateNumber('abc')).toBe('0'); // Giả sử hàm ban đầu đã xử lý (nếu không, test này sẽ cần được điều chỉnh nếu hàm không có logic kiểm tra loại dữ liệu)
    // Số âm (tùy thuộc vào yêu cầu, nhưng trong ngữ cảnh like/view thường không có số âm)
    expect(abbreviateNumber(-1000)).toBe('-1k');
  });
});
